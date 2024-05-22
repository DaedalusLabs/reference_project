<script setup lang="ts">
import { useJsonStore } from '@/stores/listing'
import NDK, { NDKRelay } from '@nostr-dev-kit/ndk'
import { onMounted, onUnmounted, reactive, ref } from 'vue'

interface Tag {
  name: string
  value: any
}

function getTagValue(tags: [], tagName: string): any | undefined {
  for (const tag of tags) {
    if (tag[0] === tagName) {
      let ret = tag.slice(1)
      if (ret.length == 1) return ret[0]
      else return ret
    }
  }
  // If the tag name is not found, return undefined or handle it as per your requirement
  return undefined
}

const store = useJsonStore()

const ndk = new NDK({
  explicitRelayUrls: [
    'wss://nostr1.daedaluslabs.io',
    'wss://nostr.dbtc.link',
    'wss://nostr2.daedaluslabs.io',
    'wss://nostr3.daedaluslabs.io',
    'wss://nostr.sebastix.dev'
  ]
})

const connectedRelays = reactive<Map<string, boolean>>(new Map())

ndk.pool.on('relay:connect', (r: NDKRelay) => {
  console.log(`Connected to relay ${r.url}`, ndk.pool.relays)
  connectedRelays.set(r.url, true)
})

ndk.pool.on('relay:disconnect', (r: NDKRelay) => {
  console.log(`Disconnected from relay ${r.url}`)
  connectedRelays.set(r.url, false)
})

onMounted(async () => {
  // Now connect to specified relays
  await ndk.connect(1000)

  const a = await ndk.subscribe({ kinds: [30402, 30403] }, { closeOnEose: false })

  a.on('event', (event) => {
    console.log(`received event on a`, event.tags)

    store.addJsonObject({
      id: event.id,
      name: getTagValue(event.tags, 'title'),
      image: getTagValue(event.tags, 'image'),
      summary: getTagValue(event.tags, 'summary'),
      price: getTagValue(event.tags, 'price')
    })
  })
  a.on('eose', () => console.log(`received eose on a`))
})

const countTrueValues = () => {
  let count = 0
  for (let value of connectedRelays.values()) {
    if (value === true) {
      count++
    }
  }
  return count
}
</script>

<template>
  <section>
    Nostr - Connected to {{ countTrueValues() }}/{{ connectedRelays.size }} relays
    <ul>
      <li
        v-for="(k, v) in Array.from(connectedRelays, ([n, v]) => {
          return [n, v]
        })"
        :key="k"
      >
        <span :class="['dot', k[1] ? 'con' : 'not']"></span> {{ k[0] }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  @apply fixed bottom-0 right-0 p-3 bg-resin-orange rounded-tl-lg;
}

.dot {
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;

  &.con {
    background-color: green;
  }

  &.not {
    background-color: red;
  }
}

li {
  @apply text-xs;
}
</style>
