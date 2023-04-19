<template>
  <q-list class="rounded-borders">
    <!-- 자식 메뉴가 있을때  -->
    <q-expansion-item v-if="menu.children">
      <template v-slot:header>
        <q-item-section avatar>
          <q-icon
            :name="menu.children ? 'turned_in_not' : 'minimize'"
            size="sm"
            color="primary"
            text-color="white"
            @click.stop="fnIconClick"
          />
        </q-item-section>

        <q-item-section>
          {{ menu.title ? menu.title : menu.menu_nm }}
          <!-- {{ getMessages(menu.title ? menu.title : menu.menu_nm_cd) }} -->
        </q-item-section>
      </template>
      <component
        :is="MenuItem"
        :menuList="menu.children"
        :clickMenu="clickMenu"
        @movePage="movePage"
      ></component>
    </q-expansion-item>

    <!-- 자식 메뉴가 없을때 -->
    <q-item v-else clickable v-ripple @click="movePage(menu)">
      <q-item-section avatar>
        <q-icon size="sm" color="primary" name="minimize" />
      </q-item-section>

      <q-item-section>
        {{ menu.title ? menu.title : menu.menu_nm }}
        <!-- {{ getMessages(menu.title ? menu.title : menu.menu_nm_cd) }} -->
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script setup>
import MenuItem from 'components/MenuItem.vue';
import { getMessages } from 'api/message';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  menu: {
    type: Object,
    default: () => {},
  },
});
// 메뉴 북마크 하기위한 Function
const fnIconClick = () => {
  console.log('fnIconClick');
};

const router = useRouter();

const clickMenu = ref('');
const movePage = menu => {
  let setObj = {};
  if (menu.to) {
    setObj.path = menu.to;
  }
  if (menu.menu_cd) {
    setObj.path = menu.devsc_path;
  }
  //console.log(router.getRoutes());
  router.push(setObj);
};

/* sample source */
// Vue Router에 routes 추가 (routes.js)
// MainLayout 하위의 children[] 에 추가함
// menu.component 는 컴포넌트의 절대경로로 입력해야 함.
// 재귀함수
const makeRoute = menus => {
  const modules = import.meta.glob('/src/pages/**/*.vue');

  menus.forEach(menu => {
    if (menu.link) {
      // _link : /formtest => formtest
      //let _link = menu.link.substring(1, menu.link.length);
      let _link = menu.link;

      router.addRoute('MainLayout', {
        path: _link,
        name: _link,
        meta: {
          breadcrumbs: menu.breadcrumbs,
        },
        //component: () => import(menu.component),
        component: modules[menu.component],
      });
    }
    // 하위 메뉴가 존재할 경우 라우터 추가 함수 실행
    if (menu.children) {
      makeRoute(menu.children);
    }
  });
};
</script>
