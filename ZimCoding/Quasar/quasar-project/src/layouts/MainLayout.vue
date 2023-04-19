<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="q-gutter-none">
            <q-btn
              outline
              color="yellow"
              v-for="app in appList"
              :key="app.app_cd"
              class="q-ma-xs"
              @click="changMenu(app.app_cd)"
            >
              {{ app.app_nm }}</q-btn
            >
          </div>
        </q-toolbar-title>

        <div class="q-ma-lg">Quasar v{{ $q.version }}</div>
        <q-btn
          flat
          outline
          round
          label="전환"
          icon="code"
          class="q-mr-xs"
          to="/sub"
        >
          <template v-slot:loading> </template>
        </q-btn>
        <q-btn
          color="yellow"
          round
          outline
          :icon="darkModeIcon"
          @click="toggleDarkMode"
        ></q-btn>
        <q-btn outline round class="q-ml-sm" to="/main/main-content">
          <q-avatar>
            <img src="/avatar.png" />
          </q-avatar>
        </q-btn>

        <div class="q-pa-md">
          <q-btn outline label="Account Settings">
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <!-- <q-separator vertical inset class="q-mx-lg" /> -->

                <div class="column items-center">
                  <!-- <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                  </q-avatar> -->

                  <div class="flex">
                    <q-btn
                      class="q-mt-sm"
                      outline
                      color="primary"
                      label="Login"
                      push
                      size="sm"
                      v-close-popup
                      to="/login"
                    />

                    <q-btn
                      class="q-mt-sm"
                      outline
                      color="primary"
                      label="Create"
                      push
                      size="sm"
                      v-close-popup
                      to="/login/up"
                    />
                  </div>
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
        <div class="q-gutter-none">
          <q-btn outline class="q-ma-xs" @click="logout"> 로그아웃 </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-avatar class="q-mr-sm" size="sm">
            <img src="/avatar.png" alt="abcd" />
          </q-avatar>
          <q-text label="Lubentise"></q-text>
        </q-item-label>
        <MenuMain :menu="m" v-for="(m, i) in menuList" :key="i" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script></script>
<script setup>
import { ref, computed, getCurrentInstance, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';
import MenuMain from '@/components/MenuMain.vue';
import { useQuasar } from 'quasar';
import { getApps } from '@/api/application';
import { getLinks } from '@/api/initLinked';
import { getUpperMenu } from '@/api/menu';

// import * as axioss from '@/boot/axios';
/* 파일에서 import */
// axioss
//   .useAxios('post', '/auth/login', { p: 'j2admin', c: '1234' })
//   .then(data => {
//     //로그인이 성공하면 메인페이지로 이동
//     mainPage();
//   })
//   .catch(error => {
//     ERROR_NOTIFY.message = error.message;
//     //$q.notify(ERROR_NOTIFY);
//     $q.dialog({ title: '알림', message: error.message });
//   });

/* Provide 로 설정한 경우 */
// const axios = inject('axios');

/* app.config.globalProperties 설정한 경우 */
const { proxy } = getCurrentInstance();
const api = proxy.$api;

const router = useRouter();

/* 상단 메뉴 Start */
const appList = ref(getApps());
const changMenu = appCd => {
  leftDrawerOpen.value = true;
  if (appCd === 'HOME') {
    menuList.value = getLinks();
  } else {
    //menuList.value = getUpperMenu(appCd, router);
    api({
      method: 'post',
      url: '/auth/menuList',
      data: { appCd },
      params: { appCd },
    }).then(data => {
      // console.log(menuList.value);
      console.log(data);
      menuList.value = data;
    });
  }
};

//메뉴 토글
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = toggle => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
/* 상단 메뉴 End*/

/* 우상단 버튼 Start */
const $q = useQuasar();

const darkModeIcon = computed(() =>
  $q.dark.isActive ? 'dark_mode' : 'light_mode',
);
const toggleDarkMode = () => {
  $q.dark.toggle();
  /*
  보통 localStorage에 set할경우 String으로 저장되서 get할때 타입에러가 나는 경우가 발생한다.
  하지만 quasar에서는 타입체크하는 구분자로 저장되서 타입걱정을 안해도 된다.
  */
  $q.localStorage.set('darkMode', $q.dark.isActive);
};

const logout = () => {
  console.log($q.sessionStorage.getAllKeys());
  $q.sessionStorage.getAllKeys().forEach(key => {
    sessionStorage.removeItem(key);
  });

  window.location.href = '/login';
};
/* 우상단 버튼 End */
/* 좌측 메뉴 Strat */
const menuList = ref([]); //;
/* 좌측 메뉴 End */
</script>
