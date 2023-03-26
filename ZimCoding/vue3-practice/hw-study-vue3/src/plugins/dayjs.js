import dayjs from 'dayjs'

export default {
  install(vue) {
    //생성된 vue 노드에 $day로 propertie 등록
    vue.config.globalProperties.$day = dayjs
    //setup 함수에서 접근하기 위한 등록
    vue.provide('dayjs', dayjs)
  }
}
