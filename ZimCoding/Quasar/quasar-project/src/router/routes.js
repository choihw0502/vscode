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
        path: 'flex-grid-two',
        component: () => import('pages/FlexGridTwo.vue'),
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
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
