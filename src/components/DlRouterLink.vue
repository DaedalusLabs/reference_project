<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  ...RouterLink.props,
  baseClass: {
    type: String,
    default: 'base-class'
  },
  inactiveClass: {
    type: String
  },
  activeClass: {
    type: String,
    default: 'active-class'
  }
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link v-else v-bind="$props" custom v-slot="{ isActive, href, navigate }">
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="[baseClass, isActive ? activeClass : inactiveClass]"
    >
      <slot />
    </a>
  </router-link>
</template>

<style lang="scss">
.base-class {
  // @apply block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700;
  @apply block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;
}

.active-class {
  @apply block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 text-resin-orange;
}
</style>
