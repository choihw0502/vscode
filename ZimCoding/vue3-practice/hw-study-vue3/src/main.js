import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(funcPlugins)
app.use(objPlugins, { name: 'test' })
app.use(router)
app.use(compo)
app.use(direct)
app.use(dayjs)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
import funcPlugins from './plugins/func'
import objPlugins from './plugins/obj'
import compo from './plugins/global-compo'
import direct from './plugins/global-direct'
import dayjs from './plugins/dayjs'

/* 
console.log('MODE: ', import.meta.env.MODE)
console.log('BASE_URL: ', import.meta.env.BASE_URL)
console.log('PROD: ', import.meta.env.PROD)
console.log('DEV: ', import.meta.env.DEV)
//VITE 등록 테스트
console.log('DEV: ', import.meta.env.VITE_TEST)
*/
