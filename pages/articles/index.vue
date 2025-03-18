<template>

  <div class="mt-20">
    <GenericComponent>
      <template #title>List of all articles</template>
      <template #description>Here you will find articles about DevOps</template>
    </GenericComponent>
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
<script setup>
const articles = await useAsyncData( () => queryContent().where({open: 1}).find())
useHead({
  title: 'Artigos'
})
const links = [
  {name: 'aws', router: '/aws', id: 1},
  {name: 'python', router: '/python', id: 2}
]
useSeoMeta({
  title: "Aricles",
  ogTitle: "Articles",
  description: 'This is my article list',
  ogDescription: 'This is my article list',
})
</script>