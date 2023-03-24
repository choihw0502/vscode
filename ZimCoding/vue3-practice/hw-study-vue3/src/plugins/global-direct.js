import focus from '@/directives/default/focus'
export default {
  install(vue) {
    vue.directive('focus', focus)
  }
}
