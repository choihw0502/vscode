<template>
  <Loading v-if="loading"></Loading>
  <Error v-else-if="error" :message="error.message"></Error>
  <div v-else>
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
import { useAlert } from '@/composables/alert'
import { useAxios } from '@/composables/axios'

const router = useRouter()
const goListPage = () => {
  router.push({ name: 'AIF' })
}

const form = ref({
  title: null,
  content: null
})

//alert composeble
const { vAlert, vSuccess } = useAlert()
const { error, loading, execute } = useAxios(
  '/posts',
  {
    method: 'post'
  },
  {
    immediate: false,
    onSuccess: () => {
      goListPage()
      vSuccess('등록이 완료되었습니다.')
    },
    onError: (err) => {
      vAlert(err.message)
    }
  }
)
const save = async () => {
  const test = { ...form.value, createdAt: Date.now() }
  execute(test)
}

/*
const save = () => {
  try {
    createPost({ ...form.value, createdAt: new Date().toLocaleDateString() })
    vSuccess('등록이 완료되었습니다.') // composables
    goListPage()
  } catch (error) {
    vAlert(error.message)
  }
}
 */
</script>

<style lang="scss" scoped></style>
