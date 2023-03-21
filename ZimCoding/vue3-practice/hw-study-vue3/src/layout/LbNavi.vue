<template>
  <div class="flex-shrink-0 p-3 bg-white">
    <a
      href="/"
      class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
    >
      <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold">메뉴정보</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1" v-for="m1 in menuList" :key="m1.menu_cd">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + m1.menu_cd"
          aria-expanded="false"
        >
          <h5>{{ m1.menu_nm_cd }}</h5>
        </button>
        <div class="collapse" :id="m1.menu_cd" v-if="!!m1.children">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li class="link-dark rounded" v-for="m2 in m1.children" :key="m2.menu_cd">
              <a
                class="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="'#' + m2.menu_cd"
                aria-expanded="false"
              >
                <h6>{{ m2.menu_nm_cd }}</h6>
              </a>
              <div class="collapse" :id="m2.menu_cd" v-if="!!m2.children">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li v-for="m3 in m2.children" :key="m3.menu_cd">
                    <a class="link-dark rounded">
                      <h6>{{ m3.menu_nm_cd }}</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <!-- <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#dashboard-collapse"
          aria-expanded="false"
        >
          Dashboard
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Overview</a></li>
            <li><a href="#" class="link-dark rounded">Weekly</a></li>
            <li><a href="#" class="link-dark rounded">Monthly</a></li>
            <li><a href="#" class="link-dark rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#orders-collapse"
          aria-expanded="false"
        >
          Orders
        </button>
        <div class="collapse" id="orders-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New</a></li>
            <li><a href="#" class="link-dark rounded">Processed</a></li>
            <li><a href="#" class="link-dark rounded">Shipped</a></li>
            <li><a href="#" class="link-dark rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#account-collapse"
          aria-expanded="false"
        >
          Account
        </button>
        <div class="collapse" id="account-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New...</a></li>
            <li><a href="#" class="link-dark rounded">Profile</a></li>
            <li><a href="#" class="link-dark rounded">Settings</a></li>
            <li><a href="#" class="link-dark rounded">Sign out</a></li>
          </ul>
        </div>
      </li> -->
    </ul>
  </div>
</template>
<script>
export function getPosts() {
  return menuList
}
</script>

<script setup>
import { getMenus, getUpperMenu } from '@/api/menu'
import { reactive } from 'vue'

const menuList = getUpperMenu()
console.log(menuList)
</script>

<style lang="scss" scoped></style>
