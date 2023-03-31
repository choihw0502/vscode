<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ content }}
    </p>
    <p class="text-muted">
      {{ createdAt }}
    </p>
    <p class="text-muted">
      {{ dayjs(nowDt).format('YYYY/MM/DD HH:mm:ss') }}
    </p>
    <template #footer>
      <div class="d-flex flex-row-reverse">
        <button class="btn p-1" @click.stop="$emit('detail')">
          <i class="bi bi-activity"></i>
        </button>
        <button class="btn p-1" @click.stop="$emit('modal')">
          <i class="bi bi-airplane-fill"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { inject } from 'vue'
import AppCard from '../AppCard.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: [String, Number, Date]
  },
  nowDt: {
    type: [String, Number, Date]
  }
})
defineEmits(['modal', 'detail'])

const dayjs = inject('dayjs')
</script>

<style lang="scss" scoped></style>
