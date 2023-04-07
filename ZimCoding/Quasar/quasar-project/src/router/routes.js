const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'color', component: () => import('pages/Color.vue') },
      { path: 'breakpoint', component: () => import('pages/Breakpoints.vue') },
      {
        path: 'flex-grid-one',
        component: () => import('pages/FlexGridOne.vue'),
      },
      {
        path: 'main-content',
        component: () => import('pages/content/MainContent.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/content/ContentPosts.vue'),
          },
          {
            path: 'save',
            component: () => import('pages/content/ContentSaves.vue'),
          },
          {
            path: 'tag',
            component: () => import('pages/content/ContentTags.vue'),
          },
        ],
      },
      {
        path: 'form-handling',
        component: () => import('pages/FormHandling.vue'),
      },
      {
        path: 'quasar-utils',
        component: () => import('pages/QuasarUtils.vue'),
      },
    ],
  },
  {
    path: '/sub',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      {
        path: 'sub-page-1',
        component: () => import('pages/sub/SubPageOne.vue'),
      },
      {
        path: 'sub-page-2',
        component: () => import('pages/sub/SubPageTwo.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: 'in',
        component: () => import('pages/login/Signin.vue'),
      },
      {
        path: 'up',
        component: () => import('src/pages/login/Signup.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

export function getRoutes() {
  return routes;
}
