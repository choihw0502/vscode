<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">
        formatDate - {{ formatDate(new Date(), FORMAT) }}
      </div>
      <div class="text-h6">
        formatDate -
        {{ formatDate(addToDate(new Date(), { days: 7, months: 1 }), FORMAT) }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Formate Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">pad - {{ pad('word', 10, '?') }}</div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">TypeCheck Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">isDate - {{ is.date(new Date()) }}</div>
    </section>
  </q-page>
</template>

<script setup>
import { date, format, is, useQuasar } from 'quasar';
const $q = useQuasar();
const loading = $q.loading.show();
setTimeout(() => {
  $q.loading.hide();
}, 500);
const FORMAT = 'YYYY-MM-DD  HH:mm:ss';
const { formatDate, addToDate } = date;

const { pad } = format;
</script>

<style lang="scss" scoped></style>
