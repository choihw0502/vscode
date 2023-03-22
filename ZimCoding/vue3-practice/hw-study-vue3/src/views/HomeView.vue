<template>
  <div>
    <!-- <h2>Home View ( test Page)</h2> -->
    <!-- <p>{{ $route }}</p> -->
    <h2>Memo</h2>
    <p>{{ content }}</p>
    <!-- <button v-on:click="test">adf{{ obj }}</button>
    <button v-on:click="test1">adf{{ obj }}</button> -->
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const content = ref('123123')
content.value = `
라이프 사이클 훅
onBeforeMount(() => {
  console.log('Before Mount!')
})
onMounted(() => {
  console.log('Mounted!')
})
;
`

const count = ref(1)
const obj = reactive({ count })

const books = reactive([ref('Vue 3 Guide')])
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// .value 필요
console.log(map.get('count').value)

const test = () => {
  console.log('count : ', count.value, ' reactive : ', obj.count)
  return obj.count++
}
const test1 = () => {
  console.log('count : ', count.value, ' reactive : ', obj.count)
  return count.value++
}
</script>

<style lang="scss" scoped></style>
