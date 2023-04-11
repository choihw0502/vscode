/* 외부와 내부에서 사용할때 import 하는 방식이 달라질수 있다 항상 확인해야함!
 */
import { boot } from 'quasar/wrappers';
import { Dark, LocalStorage } from 'quasar';

export default boot(async ({ app, router, urlPath }) => {
  console.log('### Initialization ### ');

  const checkRoute = (routes, url) => {
    for (let route of routes) {
      if (route.children.length === 0) {
        return routes.find(route => route.path == url);
      } else {
        checkRoute(route.children, url);
      }
    }
  };
  const route = checkRoute(router.getRoutes(), urlPath);
  //router.push({ path: '/' });
  console.log(route || '/');
  router.push({ path: '/', name: 'MainLayout' });
  // router.get
  /* Dark Mode 설정 */
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
