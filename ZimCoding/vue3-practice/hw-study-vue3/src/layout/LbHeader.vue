<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" active-class="active" to="/">대메뉴</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item" v-for="app in appList" :key="app.app_cd">
              <RouterLink class="nav-link" active-class="active" :to="app.app_cd">
                {{ app.app_nm }}
              </RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about"> About </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/posts"> 게시글 </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/nested"> Nested </RouterLink>
            </li> -->
          </ul>
          <div class="d-flex" role="search">
            <button class="btn btn-outline-light" type="button" @click="goPage">글쓰기</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getApps } from '@/api/application'
const appList = getApps()

const router = useRouter()
const goPage = () => {
  router.push({
    name: 'postCreate'
  })
}
</script>

<style lang="scss" scoped></style>
