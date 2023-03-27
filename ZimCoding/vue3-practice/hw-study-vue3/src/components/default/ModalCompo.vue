<template>
  <Teleport to="#telmodal">
    <Modal v-model="show" title="게시글">
      <template #default>
        <div class="row g-3">
          <div class="col-3 text-muted">제목</div>
          <div class="col-9">{{ title }}</div>
          <div class="col-3 text-muted">내용</div>
          <div class="col-9">{{ content }}</div>
          <div class="col-3 text-muted">생성일</div>
          <div class="col-9">{{ createdAt }}</div>
          <div class="col-3 text-muted">현재날짜</div>
          <div class="col-9">{{ $day(nowDt).format('YYYY.MM.DD') }}</div>
        </div>
      </template>
      <template #actions>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
          @click="$emit('update:modelValue', false)"
        >
          Close
        </button>
      </template>
    </Modal>
  </Teleport>
</template>

<script setup>
import { computed, Transition } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  createdAt: {
    type: String
  },
  nowDt: {
    type: String
  }
})
const emits = defineEmits(['update:modelValue'])

const show = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    // props.modelValue = value
    emits('update:modelValue', value)
  }
})
</script>

<style scoped></style>
