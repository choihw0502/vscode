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
    <button class="btn btn-primary" @click="plugOption.say">Click plugin</button>
    <p>마우스 위치: {{ xAxis }}, {{ yAxis }}</p>
    <hr class="my-4" />
    <p>{{ position }}</p>
    <p>x: {{ x }}, y: {{ y }}</p>
  </div>
</template>
<script>
export default {
  /*
plugin 사용하기 위해서는 setup 안의 life cycle안에서는 사용할 수 없다
전역으로 등록한 obj.js안에 globalconfig안 속성 가져오기
*/
  created() {
    // console.log(this.$plugtest)
    // this.$plugtest.say()
  }
}
</script>
<script setup>
import AppCard from '@/components/AppCard.vue'
import { reactive, inject, ref, toRef, toRefs } from 'vue'
import { useMouse } from '@/composables/mouse.js'

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
/* plugin Test  vue.inject  import */
const plugOption = inject('plugOption')
console.log(plugOption)
/*      연습장       */
const { xAxis, yAxis } = useMouse()

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

const position = reactive({
  x: 100,
  y: 1000
})
// const x = position.x
// const y = position.y
// const x =ref(position.x);
// const x = ref(position.y)
// console.log('x: ', typeof x.value)
// console.log('y: ', typeof y.value)
// const x = toRef(position, 'x') // position과 바인딩 된 x 변수
// const y = toRef(position, 'y') // position과 바인딩 된 y 변수
const { x, y } = toRefs(position)
</script>

<style lang="scss" scoped></style>
