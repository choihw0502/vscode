<template>
  <header class="p-2 text-bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <RouterLink
            tag="li"
            :class="{ 'nav-item nav-link px-2 text-secondary': true }"
            active-class="active text-white"
            :to="{ name: app.app_cd }"
            v-for="app in appList"
            :key="app.app_cd"
          >
            {{ app.app_nm }}
          </RouterLink>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2" @click="goPage">글쓰기</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getApps } from '@/api/application'
// data
const appList = getApps()

// router 설정
const router = useRouter()
const goPage = () => {
  router.push({
    name: 'postCreate'
  })
}
</script>

<style lang="scss" scoped></style>
