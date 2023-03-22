<script setup>
import LbHeader from './layout/LbHeader.vue'
import LbNavi from './layout/LbNavi.vue'
import LbView from './layout/LbView.vue'
</script>

<template>
  <LbHeader></LbHeader>
  <div style="display: flex; min-height: 657px; max-height: 1280px">
    <LbNavi></LbNavi>
    <LbView></LbView>
  </div>
</template>

<style scoped></style>
