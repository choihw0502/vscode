<template>
  <nav class="my-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a class="page-link" href="#" @click.prevent="$emit('childpage', currentPage - 1)"
          >Previous</a
        >
      </li>
      <li
        v-for="page in pageCount"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="$emit('childpage', page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="isNxetPage">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('childpage', currentPage + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

/* props 설정 - 부모로 부터 받아온 데이터 */
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  }
})
/* emits 설정 - 이벤트를 상위 부모에게 전달*/
defineEmits(['childpage'])

/* classBindding */
const isPrevPage = computed(() => {
  return { disabled: !(props.currentPage > 1) }
})
const isNxetPage = computed(() => {
  return { disabled: !(props.currentPage < props.pageCount) }
})
</script>

<style lang="scss" scoped></style>
