<template>
  <Loading v-if="loading"></Loading>
  <Error v-else-if="error" :message="error.message"></Error>
  <div v-else>
    <h2>게시글 수정</h2>
    <hr class="my-1" />
    <InputForm @submit.prevent="savePage" v-model:title="post.title" v-model:content="post.content">
      <template #actions>
        <button type="button" class="btn btn-outline-danger" @click="goDetailPage">취소</button>
        <button type="button" class="btn btn-outline-primary" @click="savePage">수정</button>
      </template>
    </InputForm>
    <!-- <Alert :show="succeccAlert" :message="alertMsg" :type="alertType"></Alert> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getPostById, updatePost } from '@/api/posts'
import { useRoute, useRouter } from 'vue-router'
import { useAlert } from '@/composables/alert'
import { useAxios } from '@/composables/axios'

const router = useRouter()
const route = useRoute()
const id = route.params.id
const { vAlert, vSuccess } = useAlert()
const { data: post, error, loading } = useAxios('/posts/' + id)

// const post = ref({
//   title: null,
//   content: null
// })

const {
  error: saveError,
  loading: editLoading,
  execute
} = useAxios(
  '/posts/' + id,
  { method: 'patch' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('수정이 완료되었습니다.')
      goDetailPage()
    },
    onError: (err) => {
      vAlert(err.message)
    }
  }
)
/* 
const fetchPost = async () => {
  try {
    loading.value = true
    const { data } = await getPostById(id)
    setPost(data)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
const setPost = ({ title, content }) => {
  post.value.title = title
  post.value.content = content
}
fetchPost()
 */

const goDetailPage = () => {
  router.push({ name: 'postDetail', param: { id } })
}
const savePage = () => {
  console.log(post.value)
  execute({ ...post.value })
}

/* 
const savePage = async () => {
  try {
    loading.value = true
    await updatePost(id, { ...post.value })
    // showAlert('수정완료!', 'success') // component
    vSuccess('등록이 완료되었습니다.') // composables
    goDetailPage()
  } catch (error) {
    // showAlert('수정에러!', 'error') // component
    vAlert(error.message)
    error.value = err
  } finally {
    loading.value = false
  }
} */
/* // components/default/Alert.vue test
const succeccAlert = ref(false)
const alertMsg = ref('')
const alertType = ref('')
const alerts = ref([])
const showAlert = (message, type = 'error') => {
  alerts.value.push({ message, type })
  // succeccAlert.value = true
  // alertMsg.value = message
  // alertType.value = type
  setTimeout(() => {
    alerts.value.shift()
    // succeccAlert.value = false
  }, 2000)
} */
</script>

<style lang="scss" scoped></style>
