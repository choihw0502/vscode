<template>
  <div class="bg-primary">
    <div class="accordion">
      <div class="accordion-item" v-for="menu in menuList" :key="menu.menuCd">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {{ menu.menuNm }}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getMenus } from '@/api/posts'
import { reactive } from 'vue'

const menuList = getMenus()
</script>

<style lang="scss" scoped></style>
