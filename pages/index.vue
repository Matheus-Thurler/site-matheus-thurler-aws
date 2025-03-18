<template>
  <div class="mt-20">
    <HeroPersonal />
    <div class="flex flex-wrap justify-center p-2 pb-20">
      <div v-for="article in articles.data._rawValue" :key="article.slug" class="flex flex-row flex-wrap mx-10 my-5">
            <RecentPosts
            :path="article._path"
            :title="article.title"
            :thumb="article.thumb"
            :description="article.description"
            :tag="article.tag"
            />
      </div>
    </div>

  </div>
</template>
<script setup >
const articles = await useAsyncData( () => queryContent().sort({ date: -1 }).limit(3).where({open: 1, en: 1}).find())
console.log(articles)
useHead({
  title: 'Matheus Thurler'
})
useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: 'This is my home page',
  ogDescription: 'This is my home page',
})
</script>