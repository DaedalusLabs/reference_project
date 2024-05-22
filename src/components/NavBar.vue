<script setup lang="ts">
import DlRouterLink from '@/components/DlRouterLink.vue'
// import darkModeLogo from '@/assets/Logo_DL-white.svg'
// import lightModeLogo from '@/assets/Logo_DL-black.svg'

import darkModeLogo from '@/assets/resin-white.svg'
import lightModeLogo from '@/assets/resin.svg'

const props = defineProps({
  darkModeLogo: {
    type: String,
    default: darkModeLogo
  },
  lightModeLogo: {
    type: String,
    default: lightModeLogo
  }
})
</script>

<template>
  <nav>
    <div id="logo">
      <a href="https://daedaluslabs.io/">
        <picture class="h-8">
          <!-- User prefers light mode: -->
          <source :srcset="darkModeLogo" media="(prefers-color-scheme: dark)" class="h-8" />

          <!-- User prefers dark mode: -->
          <source :srcset="lightModeLogo" media="(prefers-color-scheme: light)" class="h-8" />

          <img :src="darkModeLogo" class="h-8" />
        </picture>

        <span>Daedalus</span>
      </a>

      <div id="navbar-sticky">
        <ul>
          <li>
            <DlRouterLink to="/">Home</DlRouterLink>
          </li>
          <li>
            <DlRouterLink to="/about">About</DlRouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  @apply bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600;

  #logo {
    @apply max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4;

    > a {
      @apply flex items-center space-x-3 rtl:space-x-reverse;

      > span {
        @apply self-center text-2xl font-semibold whitespace-nowrap dark:text-white sr-only;
      }
    }
  }

  #navbar-sticky {
    @apply items-center justify-between hidden w-full md:flex md:w-auto md:order-1;

    > ul {
      @apply flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700;
    }
  }
}
</style>
