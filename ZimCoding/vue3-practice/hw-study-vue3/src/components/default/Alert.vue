<template>
  <Teleport to="telmodal">
    <Transition name="slide-fade">
      <div v-if="show" class="app-alert alert" :class="styleClass" role="alert">{{ message }}</div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { propsToAttrMap } from '@vue/shared'
import { computed } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: [String, Number],
    required: true
  },
  type: {
    type: String,
    default: 'error',
    validator: (value) => ['success', 'error'].includes(value)
  }
})

const styleClass = computed(() => (props.type === 'error' ? 'alert-danger' : 'alert-success'))
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 60px;
  right: 50px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
