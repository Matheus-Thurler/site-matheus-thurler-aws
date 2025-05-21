<template>
  <div class="max-w-sm rounded overflow-hidden bg-gray-800 dark:bg-white shadow-lg">
    <nuxt-link :to="path">
      <NuxtImg class="hover:scale-105 transition-transform duration-300 ease-in-out transform w-full" :alt="description" :src="thumb" />
      </nuxt-link>

    <div class="bg-gray-600"> <div class="px-6 py-3 font-bold text-xl"> <nuxt-link :to="path" class="uppercase tracking-wide text-sm text-white font-semibold hover:underline">
          {{ title }}
        </nuxt-link>
      </div>
    </div>

    <div class="px-6 pt-3 pb-4"> <p class="text-base text-white dark:text-black">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  path: {
    type: String
  },
  description: {
    type: String
  },
  title: {
    type: String
  },
  thumb: {
    type: String
  },
  tag: {
    type: String
  },
  slug: {
    type: String
  }
})

// useSeoMeta({}) // Removido se não estiver sendo usado ou preenchido
</script>