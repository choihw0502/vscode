<script setup>
import LbNavi from './LbNavi.vue'
</script>

<template>
  <main>
    <LbNavi></LbNavi>
    <div class="container py-4">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
