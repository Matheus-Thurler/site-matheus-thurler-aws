<template>
  <div class="max-w-sm w-60 rounded overflow-hidden bg-gray-800 dark:bg-white shadow-lg h-60">
    <nuxt-link :to="path">
      <NuxtImg class="transition-transform duration-300 ease-in-out transform hover:scale-105" :src="thumb" />
     </nuxt-link>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-200">
        <nuxt-link :to="path" class="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline foregrou">
          {{ title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  path: {
    type: String,
  },
  description: {
    type: String,
  },
  title: {
    type: String,
  },
  thumb: {
    type: String,
  },
  tag: {
    type: String,
  },
  slug: {
    type: String,
  },
});
useSeoMeta({

})
</script>