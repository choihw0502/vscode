<script setup>
import LbHeader from './layout/LbHeader.vue'
import LbNavi from './layout/LbNavi.vue'
import LbView from './layout/LbView.vue'
</script>

<template>
  <LbHeader></LbHeader>
  <div style="width: 100%; height: auto">
    <div style="width: 30%; float: left; background-color: black">
      <LbNavi></LbNavi>
    </div>
    <div style="width: 70%; float: left; background-color: bisque">
      <LbView></LbView>
    </div>
  </div>
</template>

<style scoped></style>
