<template>
  <div>
    <div class="text-h2">저장됨</div>
    <div class="row q-col-gutter-sm">
      <div class="col-12 col-sm-4 col-md-4 col-lg-3" v-for="n in 19" :key="n">
        <q-card
          class="my-card text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
