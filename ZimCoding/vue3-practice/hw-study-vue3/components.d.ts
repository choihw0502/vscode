// components.d.ts
declare module '@vue/runtime-core'{
  export interfawce GlobalComponents{
    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];
  }
}

export {}