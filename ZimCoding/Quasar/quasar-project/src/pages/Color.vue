<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separator class="q-my-md" />
      <div class="text-test">Custem Color</div>
      <div class="text-red">Custem Color</div>
      <!-- 컴포넌트에서 생성한 색을 변경할 수 있다. -->
      <q-btn color="test" text-color="test">test</q-btn>
      <q-btn color="red" text-color="yellow">test</q-btn>
    </section>
  </q-page>
</template>
<script>
export default {
  name: 'ColorComp',
};
</script>
<script setup>
import { setCssVar } from 'quasar';

setCssVar('text-test', '#123456');
</script>

<style lang="scss" scoped>
.text-test {
  color: $test;
}

.text-red {
  color: $red;
}
</style>
