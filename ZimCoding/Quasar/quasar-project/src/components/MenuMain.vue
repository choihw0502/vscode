<template>
  <q-list class="rounded-borders">
    <!-- 자식 메뉴가 있을때  -->
    <q-expansion-item v-if="menu.children">
      <template v-slot:header>
        <q-item-section avatar>
          <q-icon
            :name="menu.children ? 'turned_in_not' : 'minimize'"
            size="sm"
            color="primary"
            text-color="white"
            @click.stop="fnIconClick"
          />
        </q-item-section>

        <q-item-section>
          {{ getMessages(menu.title ? menu.title : menu.menu_nm_cd) }}
        </q-item-section>
      </template>
      <component
        :is="MenuItem"
        :menuList="menu.children"
        @movePage="movePage"
      ></component>
    </q-expansion-item>

    <!-- 자식 메뉴가 없을때 -->
    <q-item v-else clickable v-ripple @click="movePage(menu)">
      <q-item-section avatar>
        <q-icon size="sm" color="primary" name="minimize" />
      </q-item-section>

      <q-item-section>
        {{ getMessages(menu.title ? menu.title : menu.menu_nm_cd) }}
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script setup>
import MenuItem from 'components/MenuItem.vue';
import { getMessages } from '/src/api/message';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  menu: {
    type: Object,
    default: () => {},
  },
});
// 메뉴 북마크 하기위한 Function
const fnIconClick = () => {
  console.log('fnIconClick');
};

const router = useRouter();
const movePage = menu => {
  let setObj = {};
  if (menu.to) {
    setObj.path = menu.to;
  }
  if (menu.menu_cd) {
    setObj.name = menu.menu_cd;
  }
  router.push(setObj);
};
</script>
