<template>
  <div class="q-pa-sm q-ma-sm">
    <div class="flex">
      <!-- <q-option-group
        v-model="tSeparator"
        inline
        :options="tSeparatorContent"
      />
      <q-separator vertical inset></q-separator> -->
      <q-option-group
        v-model="tSeparator"
        inline
        :options="tSeparatorContent"
      />
    </div>
    <div class="q-mt-md">Selected: {{ JSON.stringify(tSeparator) }}</div>

    <q-separator vertical inset></q-separator>
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="separator"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:no-data="{ icon, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> 데이터가 없습니다. ㅠㅠ </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
    <!-- hide-header -->
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue';

/* Test 선언문 */
const tSeparator = ref('vertical');
const tSeparatorContent = ref([
  { label: 'Horizontal', value: 'horizontal' },
  { label: 'Vertical', value: 'vertical' },
  { label: 'Cell', value: 'cell' },
  { label: 'None', value: 'none' },
]);
const selected = ref([]);

const editContent = () => {
  return JSON.stringify(tt);
};
/* Test 선언문 */
const option = ref({
  hideHeade: 'hide-header',
});

const defaultOptions = {
  // unique id
  // identifies column
  name: 'name',
  label: 'Dessert (100g serving)',
  field: 'name',
  required: true,
  align: 'center',
  // sortable: true,
  // sort: (a, b, rowA, rowB) => parseInt(a, 10) - parseInt(b, 10),
  // sortOrder: 'ad', // or 'da'
  // format: (val, row) => `${val}%`,

  // header th:
  headerStyle: 'width: 500px',
  headerClasses: 'my-special-class',

  // body td:
  style: 'width: 500px',
  // or as Function --> style: row => ... (return String/Array/Object)
  classes: 'my-special-class',
  // or as Function --> classes: row => ... (return String)
};

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
const columns = computed(() =>
  props.modelValue.columns.map(row => Object.assign({}, defaultOptions, row)),
);
const rows = computed(() => props.modelValue.rows);

onMounted(() => {
  console.log(findValue(window, '최형원'));
});

const findValue = function (obj, fkey) {
  if (!!obj && typeof obj === 'object') {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        if (obj[key].indexOf(fkey) >= 0) {
          return key;
        }
      } else {
        findValue(obj[key], fkey);
      }
    }
  } else {
    console.log(obj);
  }
};
</script>

<style lang="scss" scoped></style>
