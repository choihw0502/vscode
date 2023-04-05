<template>
  <GridComp title="test" separator="vertical" v-model="grid"> </GridComp>
  <p>{{ test ? test : '123' }}</p>
  <q-page class="flex flex-center">
    <!--
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <q-separator class="q-my-md"></q-separator>
    -->
  </q-page>
</template>

<script setup>
import { ref, defineComponent, onMounted, computed } from 'vue';
import GridComp from 'components/GridComp.vue';
import item from 'src/api/item';
import { useCookies } from 'vue3-cookies';

const test = computed(() => {
  return 'abcd';
});

const columns = ref([
  { name: 'ctkey', field: 'ctkey', label: 'cttttkey' },
  { name: 'owkey', field: 'owkey', label: 'owkey' },
  { name: 'ickey', field: 'ickey', label: 'ickey' },
  { name: 'icname', field: 'icname', label: 'icname' },
  { name: 'icgrkey', field: 'icgrkey', label: 'icgrkey' },
  { name: 'icgrtype', field: 'icgrtype', label: 'icgrtype' },
  { name: 'icutkey', field: 'icutkey', label: 'icutkey' },
  { name: 'uom', field: 'uom', label: 'uom' },
  { name: 'loggrpcd', field: 'loggrpcd', label: 'loggrpcd' },
  { name: 'barcode', field: 'barcode', label: 'barcode' },
  { name: 'width', field: 'width', label: 'width' },
  { name: 'length', field: 'length', label: 'length' },
  { name: 'height', field: 'height', label: 'height' },
  { name: 'volume', field: 'volume', label: 'volume' },
  { name: 'weight', field: 'weight', label: 'weight' },
  { name: 'useyn', field: 'useyn', label: 'useyn' },
  { name: 'remark', field: 'remark', label: 'remark' },
  { name: 'insertdate', field: 'insertdate', label: 'insertdate' },
  { name: 'inserturkey', field: 'inserturkey', label: 'inserturkey' },
  { name: 'updatedate', field: 'updatedate', label: 'updatedate' },
  { name: 'updateurkey', field: 'updateurkey', label: 'updateurkey' },
  { name: 'imgurl', field: 'imgurl', label: 'imgurl' },
]);

const rows = ref(item.itemList);
const grid = ref({
  columns,
  rows,
});

onMounted(() => {});

const findValue = function (chkObj, obj, fkey) {
  for (let key in obj) {
    //window 자기자신객체 제외
    if (obj[key] === obj || chkObj.indexOf(obj[key]) >= 0) {
      continue;
    }
    if (typeof obj[key] === 'function') {
    }
    if (window[key] !== null) {
      if (typeof obj[key] === 'string') {
        if (obj[key].indexOf(fkey) >= 0) {
          return key;
        }
      }

      if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key])) {
        } else {
          findValue(obj[key], fkey);
        }
      }
    }
  }
};
</script>
