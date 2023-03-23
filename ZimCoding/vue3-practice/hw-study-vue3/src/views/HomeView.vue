<template>
  <div>
    <hr class="my-4" />
    <!-- <h2>Home View ( test Page)</h2> -->
    <!-- <p>{{ $route }}</p> -->
    <h2>Memo</h2>
    <p>{{ content }}</p>
    <!-- <button v-on:click="test">adf{{ obj }}</button>
    <button v-on:click="test1">adf{{ obj }}</button> -->
    <hr class="my-4" />
    <Grid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </Grid>
  </div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue'
import Grid from '@/components/default/Grid.vue'
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
const items = ref(['a', 'b', 'c', 'd', 'e'])

/*      연습장       */
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
