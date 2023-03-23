<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-1" />
    <InputForm @submit.prevent="savePage" v-model:title="post.title" v-model:content="post.content">
      <template #actions>
        <button type="button" class="btn btn-outline-danger" @click="goDetailPage">취소</button>
        <button type="button" class="btn btn-outline-primary" @click="savePage">수정</button>
      </template>
    </InputForm>
    <!-- <Alert :show="succeccAlert" :message="alertMsg" :type="alertType"></Alert> -->
    <GroupAlert :items="alerts"></GroupAlert>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getPostById, updatePost } from '@/api/posts'
import { useRoute, useRouter } from 'vue-router'
import InputForm from '@/components/default/InputForm.vue'
import Alert from '@/components/default/Alert.vue'
import GroupAlert from '@/components/default/GroupAlert.vue'

const router = useRouter()
const route = useRoute()
const id = route.params.id

const post = ref({
  title: null,
  content: null
})
const fetchPost = async () => {
  const { data } = await getPostById(id)
  setPost(data)
}
const setPost = ({ title, content }) => {
  post.value.title = title
  post.value.content = content
}
fetchPost()

const goDetailPage = () => {
  router.push({ name: 'postDetail', param: { id } })
}
const savePage = async () => {
  try {
    await updatePost(id, { ...post.value })
    showAlert('수정완료!', 'success')
    // goDetailPage()
  } catch (error) {
    showAlert('수정에러!', 'error')
    console.log('PostEditView.save > ', error)
  }
}

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
}
</script>

<style lang="scss" scoped></style>
