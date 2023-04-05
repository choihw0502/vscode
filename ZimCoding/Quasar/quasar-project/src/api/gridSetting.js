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
const fullscreen = value => {
  console.log(value);
};

const gridSetting = {};
export default {
  defaultOptions,
  gridSetting,
  fullscreen,
};
