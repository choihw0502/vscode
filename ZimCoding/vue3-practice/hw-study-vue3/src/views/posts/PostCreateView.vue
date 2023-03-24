<template>
  <div>
    <h2>게시글 생성</h2>
    <hr class="my-4" />
    <InputForm @submit.prevent="save" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
        <button type="button" class="btn btn-primary" @click="save">저장</button>
      </template>
    </InputForm>
  </div>
</template>

<script setup>
import { createPost } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goListPage = () => {
  router.push({ name: 'AIF' })
}

const form = ref({
  title: null,
  content: null
})
const save = () => {
  try {
    createPost({ ...form.value, createdAt: new Date().toLocaleDateString() })
    goListPage()
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped></style>
