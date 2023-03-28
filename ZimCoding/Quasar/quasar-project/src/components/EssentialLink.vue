<template>
  <q-item clickable tag="a" :to="to" active-class="text-secondary">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<!-- to ? 'none' : '_blank' target="_blank" :href="link" :to="to"
:href="to ? '': link"
:target="to ? '' : _blank"
-->
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  link: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },

  to: {
    type: String,
    default: '#',
  },
});
// import { reactive, onMounted, computed } from 'vue';
// const propsClass = reactive({});
// const propFnc = () => {
//   const temp = props.to
//     ? { to: props.to }
//     : { href: props.link, target: '_blank' };
//   return Object.assign(propsClass, temp);
// };
</script>
