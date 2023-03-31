<template>
  <div>
    <div class="text-h2">게시글</div>
    <div class="row q-col-gutter-sm">
      <div class="col-12 col-sm-4 col-md-4 col-lg-3" v-for="n in 19" :key="n">
        <q-card class="my-card">
          <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div
              class="absolute-bottom text-subtitle2 full-height flex flex-center"
            >
              Title
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
