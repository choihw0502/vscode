<template>
  <!-- breaking 포인트 설정은 quasar.config.js에서 framework안에 cssAddon: true 지정하면 하위 css중 하나만 설정된다 -->
  <q-page class="q-pa-xl q-pa-md-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Break Point</div>
      <q-separator class="q-my-md" />
      <div class="break-screen">
        <span class="text-h2 text-weight-bold text-white">
          {{ $q.screen.name }}
        </span>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.screen Check</div>
      <q-separator class="q-my-md" />
      <div class="text-subtitle1">
        <li v-for="(value, key) in $q.screen" :key="key">
          <!-- 인라인 엘리먼트 초기 디스플레이 값에 따라서 width와 height 가 적용되지않는다 그래서 클래서로 정의해줘야한다-->
          <span class="inline-block" style="width: 120px"> {{ key }}</span>
          <!-- <span>{{ value }}</span> -->
          <span>{{ isFunction(value) ? '함수' : value }}</span>
        </li>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'BreakPorintComp',
};
</script>
<script setup>
import { useQuasar } from 'quasar';

const $q = useQuasar();
const isFunction = value => {
  return typeof value === 'function';
};
</script>

<style lang="scss" scoped>
.break-screen {
  height: 200px;
  background-color: $dark;
}

@media (max-width: $breakpoint-xs-max) {
  .break-screen {
    background-color: $red;
  }
}

.break-screen {
  body.screen--sm & {
    background-color: $orange;
  }
}
</style>
