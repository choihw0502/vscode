<template>
  <GridComp title="test" separator="vertical" v-model="grid"></GridComp>
  <q-page class="flex flex-center">
    <!--
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <q-separator class="q-my-md"></q-separator>
    -->
    <!-- :columns="columns"
      :rows="item.itemList" -->
  </q-page>
</template>

<script setup>
import { ref, defineComponent } from 'vue';
import GridComp from 'components/GridComp.vue';
import item from 'src/api/item';

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
  columns: columns,
  // rows: rows,
});
// export default defineComponent({
//   name: 'IndexPage',
// });
</script>
