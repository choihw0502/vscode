<template>
  <nav id="sidebar" class="bg-dark">
    <ul class="list-unstyled">
      <li class="active" v-for="menu in menuList" :key="menu.menu_cd">
        <a
          class="dropdown-toggle collapsed"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + menu.menu_cd"
          aria-expanded="false"
        >
          <h5>{{ getMessages(menu.menu_nm_cd) }}</h5>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { getMessages } from '@/api/message'
import { defineProps } from 'vue'
import ChildMenu from './childMenu.vue'

const props = defineProps({
  menuList: {
    type: Object,
    default: function () {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
