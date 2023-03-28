<template>
  <Loading v-if="loading"></Loading>
  <Error v-else-if="error" :message="error.message"></Error>
  <div v-else>
    <!-- test용 코드 -->
    <p v-show="false">params : {{ $route.params }}</p>
    <p v-show="false">query : {{ $route.query.searchText }}</p>
    <p v-show="false">hash : {{ $route.hash }}</p>
    <!-- test용 코드 -->
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <p class="text-muted">{{ $day(post.nowDt).format('YYYY/MM/DD') }}</p>
    <hr class="my-4" />
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
import { deletePost, getPostById } from '@/api/posts'
import { ref } from 'vue'
import { useAxios } from '@/composables/axios'
import { useAlert } from '@/composables/alert'

const props = defineProps({
  // id: String
  id: { type: [String, Number] }
})
const { vAlert, vSuccess } = useAlert()
/*
const post = ref({})
const fetchPost = async () => {
  const { data } = await getPostById(props.id)
  setPost(data)
}
// {} 대괄호 안에 데이터는 구조분해할당이라고 object 객체안의 key값을 지정한다
const setPost = ({ title, content, createdAt, nowDt }) => {
post.value.title = title
  post.value.content = content
  post.value.createdAt = createdAt
  post.value.nowDt = nowDt || Date.now()
}
fetchPost()
 */
const { error, loading, data: post } = useAxios('/posts/' + props.id)
const {
  error: removeError,
  loading: removeLoading,
  execute
} = useAxios(
  '/posts/' + props.id,
  { method: 'delete' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('삭제가 완료되었습니다.')
      goListPage()
    },
    onError: (err) => {
      console.log(err)
      vAlert(err.message)
    }
  }
)

const goDelPage = () => {
  if (confirm('삭제하시겠습니까?') === false) return
  execute()
}
/*
const removeError = ref(null)
const removeLoading = ref(false)
const goDelPage = async () => {
  try {
    if (confirm('삭제하시겠습니까?') === false) return
    removeLoading.value = true
    await deletePost(props.id)
    vSuccess('삭제가 완료되었습니다.')
    goListPage()
  } catch (err) {
    vAlert(err.message)
    removeError.value = err
  } finally {
    removeLoading.value = false
  }
}
 */
// const route = useRoute()
const router = useRouter()
const goListPage = () => {
  router.push({
    name: 'AIF'
  })
}
// console.log(route)
const goEditPage = () => {
  router.push({
    name: 'postEdit',
    param: { id: props.id }
  })
}
</script>

<style lang="scss" scoped></style>
