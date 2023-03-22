/* 라우트(route)와 라우터(router) 
1. route : 현재 활성화된 페이지(component)에 대한 접근
	- Option API 			: this.$route
	- Composition API : useRoute()
	- template 				: $route
	2. router: 다른 페이지(component)로 이동할때
	- Option API 			: this.$router
	- Composition API : useRouter()
	- template 				: $router
*/
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

import NestedView from '@/views/nested/NestedView.vue'
import NestedOneView from '@/views/nested/NestedOneView.vue'
import NestedTwoView from '@/views/nested/NestedTwoView.vue'

import PostListView from '@/views/posts/PostListView.vue'
import postDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: HomeView
  },
  {
    path: '/about',
    name: 'CMS',
    component: AboutView
  },
  {
    path: '/posts',
    name: 'AIF',
    component: PostListView
  },
  {
    path: '/myHome',
    name: 'MYP',
    component: NestedView
  },
  {
    path: '/posts/:id',
    name: 'postDetail',
    component: postDetailView,
    // props: true
    props: (route) => ({
      id: parseInt(route.params.id)
    })
  },
  {
    path: '/posts/:id/edit',
    name: 'postEdit',
    component: PostEditView
  },
  {
    path: '/posts/:id/create',
    name: 'postCreate',
    component: PostCreateView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/myHome',
    name: 'MYP',
    component: NestedView,
    children: [
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
