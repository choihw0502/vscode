<template>
  <li class="rounded" v-for="m3 in m2.children" :key="m3.menu_cd">
    <a
      class="dropdown-toggle collapsed"
      data-bs-toggle="collapse"
      :data-bs-target="'#' + m3.menu_cd"
      aria-expanded="false"
    >
      <h6>{{ getMessages(m3.menu_nm_cd) }}</h6>
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  childList: {
    type: Array,
    default: function () {
      return []
    }
  }
})
</script>

<style lang="scss" scoped></style>
