<template>
  <div class="mt-20">
    <div class="flex mx-auto w-full justify-center">
    </div>
    <div class="text-center">
      <h1 class="mb-4 text-lg font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
        <slot name="title"></slot>
      </h1>
      <h2 class=" subtitle font-normal mb-20">
        <slot name="subtitle"></slot>
      </h2>
      <h2 class=" subtitle font-normal mb-20">
        <slot name="description"></slot>
      </h2>
      
    </div>
  </div>
</template>