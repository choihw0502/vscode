import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useCounterStore = defineStore('counter', () => {
  const count = ref(2);
  const name = ref('ethan');
  const doubleCount = computed(() => count.value * 2);
  const increment = () => count.value++;

  return { count, name, doubleCount, increment };
});
