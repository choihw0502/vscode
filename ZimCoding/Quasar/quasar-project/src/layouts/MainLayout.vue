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

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <q-btn flat round dense icon="sim_card" class="q-mr-xs" to="/sub" />
        <q-btn
          flat
          round
          dense
          :icon="darkModeIcon"
          @click="toggleDarkMode"
        ></q-btn>
        <q-btn round class="q-ml-sm" to="/main-content">
          <q-avatar size="42px">
            <img src="/avatar.png" />
          </q-avatar>
        </q-btn>

        <div class="q-pa-md">
          <q-btn label="Account Settings">
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
                      to="/login/in"
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
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-avatar class="q-mr-sm" size="sm">
            <img src="/avatar.png" alt="" />
          </q-avatar>
          Essential Links
        </q-item-label>

        <EssentialLink
          class=""
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: 'Typography',
    caption: 'Typography Sample',
    icon: 'school',
    //현재화면에서 router로 랜더링할때 to Propertie 사용
    to: '/typography',
  },
  {
    title: 'Color',
    caption: 'Color Sample',
    icon: 'circle',
    //현재화면에서 router로 랜더링할때 to Propertie 사용
    to: '/color',
  },
  {
    title: 'BreakPoint',
    caption: 'Breakpoint Sample',
    icon: 'settings',
    //현재화면에서 router로 랜더링할때 to Propertie 사용
    to: '/breakpoint',
  },
  {
    title: 'Grid One',
    caption: 'Grid Sample First',
    icon: 'settings',
    //현재화면에서 router로 랜더링할때 to Propertie 사용
    to: '/flex-grid-one',
  },
  {
    title: 'Instagram',
    caption: 'Sample Create',
    icon: 'settings',
    //현재화면에서 router로 랜더링할때 to Propertie 사용
    to: '/main-content',
  },
  {
    title: 'Form Handling',
    caption: 'quasar.dev',
    icon: 'school',
    //현재화면에서 router로 랜더링할때 to Propertie 사용
    to: '/form-handling',
  },
  {
    title: 'Quasar Utils',
    caption: 'quasar.dev',
    icon: 'school',
    //현재화면에서 router로 랜더링할때 to Propertie 사용
    to: '/quasar-utils',
  },
  // {
  //   title: 'Docs',
  //   caption: 'quasar.dev',
  //   icon: 'school',
  //   link: 'https://quasar.dev',
  // },
  // {
  //   title: 'Github',
  //   caption: 'github.com/quasarframework',
  //   icon: 'code',
  //   link: 'https://github.com/quasarframework',
  // },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev',
  // },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev',
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev',
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev',
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev',
  // },
];
</script>
<script setup>
import { ref, computed, watchEffect } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const leftDrawerOpen = ref(false);

const essentialLinks = linksList;
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);

const darkModeIcon = computed(() =>
  $q.dark.isActive ? 'dark_mode' : 'light_mode',
);
const toggleDarkMode = () => {
  $q.dark.toggle();
  /*
  보통 localStorage에 set할경우 String으로 저장되서 get할때 타입에러가 나는경우가발생한다.
  하지만 quasar에서는 타입체크하는 구분자로 저장되서 타입걱정을 안해도 된다.
  */
  $q.localStorage.set('darkMode', $q.dark.isActive);
};
// const transformLayout = () => {
//   let value = $q.localStorage.getItem('layout') || '';
//   console.log('1', value);
//   value = value == 'sub' ? '' : 'sub';
//   console.log('2', value);
//   $q.localStorage.set('layout', value);

//   return value;
// };
</script>
