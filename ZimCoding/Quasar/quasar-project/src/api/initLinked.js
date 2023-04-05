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
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export function getLinks() {
  return linksList;
}
