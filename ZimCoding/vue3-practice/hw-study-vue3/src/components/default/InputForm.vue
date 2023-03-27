<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        :value="content"
        @input="$emit('update:content', htmlConversion($event.target.value))"
        class="form-control"
        id="content"
        rows="6"
        wrap="hard"
      ></textarea>
    </div>
    <div class="justify-content-center d-flex gap-2 mpt-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String
})
const emits = defineEmits(['update:title', 'update:content'])

const htmlConversion = (value) => {
  //console.log(value)
  return value
}

// props.content = computed({
//   get() {
//     console.log(props.content)
//     return props.content
//   },
//   set(value) {
//     emits('update:content', value)
//   }
// })
</script>

<style lang="scss" scoped></style>
