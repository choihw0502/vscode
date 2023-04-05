<template>
  <q-item
    :clickable="menu.children ? false : true"
    v-for="menu in menuList"
    :key="menu.menu_cd"
    :active="menu.menu_cd === clickMenu"
    @click.prevent="$emit('movePage', menu)"
  >
    <q-item-section avatar v-if="!menu.children">
      <q-icon
        color="primary"
        size="sm"
        :name="menu.children ? 'turned_in' : 'minimize'"
      />
    </q-item-section>
    <q-item-section v-if="!menu.children">
      {{ getMessages(menu.menu_nm_cd) }}
    </q-item-section>
    <q-item-section v-else>
      <component :is="EssentialLink" :menu="menu"></component>
    </q-item-section>
  </q-item>
</template>
<script setup>
import EssentialLink from 'src/components/MenuMain.vue';
import { getMessages } from '/src/api/message';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/* 부모에게 전달받은 데이터 */
const props = defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
});

/* 부모의 메서드 사용 */
defineEmits(['movePage']);

/* 태그안 콘솔찍기용 */
const consoleMenu = menu => {
  console.log(menu);
};
</script>
