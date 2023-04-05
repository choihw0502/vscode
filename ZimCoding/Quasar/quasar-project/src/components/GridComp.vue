<template>
  <div class="q-pa-sm q-ma-sm">
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      :fullscreen="false"
      :loading="false"
      loading-label="로딩중이니?"
      no-data-label="뭐야?"
    >
      <template v-slot:top>
        <div>{{ title }}</div>
        <!-- <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        /> -->
      </template>
      <!-- row-key="name"
        :grid="true"
        :grid-header="false"
      :separator="separator"
      selection="multiple"
      visible-columns="['check', 'one']" -->
      <!-- <template v-slot:no-data="{ icon, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> 데이터가 없습니다. { icon } {{ icon }} {{ filter }}</span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template> -->
    </q-table>
    <q-btn label="fullscreen" @click="config.fullscreen"></q-btn>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue';
import config from 'src/api/gridSetting';
const props = defineProps({
  modelValue: {
    type: Object,
    require: true,
  },
  title: { type: String },
  separator: {
    type: String,
    default: 'horizontal',
  },
});

console.log(props.separator);
// props.separator = computed(() => tSeparator);

const columns = computed(() =>
  props.modelValue.columns.map(row =>
    Object.assign({}, config.defaultOptions, row),
  ),
);

const rows = computed(() => props.modelValue.rows);

const addRow = () => {};
</script>

<style lang="scss" scoped></style>
