<script setup lang="ts">
import { useJsonStore } from '@/stores/listing'
import { computed } from 'vue'

const store = useJsonStore()

let allJsonObjects = store.jsonObjects

store.$subscribe((mutation, state) => {
  console.log(state)
  allJsonObjects = state.jsonObjects
})

const chunkArray = (arr: any[], chunkSize: number) => {
  const chunks = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}

const chunkedJsonObjects = computed(() => chunkArray(allJsonObjects, 2))
</script>

<template>
  <!-- <h1>The New Frontier</h1>
  <h2>At Daedalus Labs we empower humanity with Bitcoin and NOSTR based services</h2> -->

  <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
    <template v-for="(chunk, chunkIndex) in chunkedJsonObjects" :key="chunkIndex">
      <div class="items">
        <div v-for="(obj, index) in chunk" :key="index" class="item">
          <img class="max-h-full max-w-full rounded-lg" :src="obj.image" :alt="obj.name" />
          {{ obj.name }}<br />
          <small>{{ obj.price.join(' ') }}</small>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.items {
  @apply grid gap-4;
}

.item {
  @apply border-4 text-center p-4 h-[23em];

  img {
  }
}
</style>
