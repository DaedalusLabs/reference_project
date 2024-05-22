<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NostrStatus from './components/NostrStatus.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <NostrStatus />
</template>

<style lang="scss"></style>
