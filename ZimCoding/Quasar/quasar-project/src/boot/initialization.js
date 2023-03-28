/* 외부와 내부에서 사용할때 import 하는 방식이 달라질수 있다 항상 확인해야함!
 */
import { boot } from 'quasar/wrappers';
import { Dark, LocalStorage } from 'quasar';

export default boot(async () => {
  console.log('### Initialization ### ');
  /* Dark Mode 설정 */
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
