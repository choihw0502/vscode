<template>
  <div>
    <!-- test용 코드 -->
    <p v-show="false">params : {{ $route.params }}</p>
    <p v-show="false">query : {{ $route.query.searchText }}</p>
    <p v-show="false">hash : {{ $route.hash }}</p>
    <!-- test용 코드 -->
    <h2>제목 {{ route.params.id }}</h2>
    <p>내용</p>
    <p class="text-muted">날짜</p>
    <hr class="my-2" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goDelPage">삭제</button>
      </div>
    </div>
  </div>
</template>
0

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { getPostById } from '@/api/posts'
import { ref } from 'vue'

const props = defaultProps({
  // id: String
  id: Number
})
console.log(props)
const route = useRoute()
const router = useRouter()
const id = route.params.id
const form = ref({})

const fetchPost = () => {
  const data = getPostById(id)
  form.value = { ...data }
}
fetchPost()

const goListPage = () => {
  router.push({
    name: 'postList'
  })
}
console.log(route)
const goEditPage = () => {
  router.push({
    name: 'postEdit',
    param: { id }
  })
}
const goDelPage = () => {}
</script>

<style lang="scss" scoped></style>
