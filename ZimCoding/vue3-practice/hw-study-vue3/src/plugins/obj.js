const objPlugins = {
  install(vue, options) {
    console.log('objPlugins', vue, options)
    options.say = () => {
      alert('Say Yes!!@!@')
    }
    /* 전역속성을 사용하기 
    vue는 root id를 가르킴
    */
    vue.config.globalProperties.$plugtest = options

    /* setup 안에서 사용하기 위한 선언 */
    vue.provide('plugOption', options)
  }
}
export default objPlugins
