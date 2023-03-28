<template>
  <q-page class="q-pa-xl q-pa-md-xl">
    <section class="q-mb-xl no-wrap">
      <div class="text-h4">Grid One</div>
      <q-separator class="q-my-md" />
      <div class="bg-yellow">
        <div
          class="row q-col-gutter-md"
          v-for="(menu, index) in menuList"
          :key="index"
        >
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3"
            v-for="(key, val) of menu"
            :key="val"
          >
            {{ key }}
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'gridOne',
};
</script>

<script setup>
import { getMenus } from '../api/menu';
const menuList = getMenus();
console.log(menuList);
</script>

<style lang="scss" scoped></style>
