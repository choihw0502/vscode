<template>
  <div>
    <div class="text-h2">태그됨</div>
    <div class="row q-col-gutter-sm">
      <div class="col-12 col-sm-4 col-md-4 col-lg-3" v-for="n in 19" :key="n">
        <q-card class="my-card">
          <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
