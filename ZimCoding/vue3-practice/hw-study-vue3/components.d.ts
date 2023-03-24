// components.d.ts
// const path = './src/components/default'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Alert: typeof import(`${path}/Alert.vue`)['default']
    // Filter: typeof import(`${path}/Filter.vue`)['default']
    // Grid: typeof import(`${path}/Grid.vue`)['default']
    // GroupAlert: typeof import(`${path}/GroupAlert.vue`)['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}

export {}
