import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { useCounterStore } from 'src/store/api';

export default boot(async ({ app }) => {
  console.log('### Pinia Boot ### ');

  app.use(createPinia());
});
