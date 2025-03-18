<template>
  <main class="p-20 space-y-80">
    <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto ">
      <ContentDoc/>
    </article>
  <div class="flex gap-2 justify-center flex-wrap">
      <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :network="network"
        :styled="true"
      />
    </div>
  </main>
</template>

<script setup lang="ts">

const route = useRoute()
useHead({
  title: route.params.path[1]
})
useSeoMeta({
  title: route.params.path[1],
  ogTitle: route.params.path[1],
  description: route.params.path[1],
  ogDescription: route.params.path[1],
})
</script>