<template>
  <div class="h-20 px-5 bg-gray-900 shadow-md text-white w-full flex justify-between items-center">
    <div>
      <nuxt-link to="/">
        Matheus Thurler
      </nuxt-link>
    </div>

    <div class="md:hidden">
      <button
        aria-label="Abrir menu de navegação"
        @click="toggleMenu"
        class="text-white focus:outline-none"
      >
        <Icon name="heroicons-outline:menu-alt-3" size="30" />
      </button>
    </div>

    <div class="hidden md:flex space-x-5">
      <NuxtLink to="/articles">
        Articles
      </NuxtLink>
    </div>

    <div class="hidden md:flex space-x-5 items-center">
      <a
        aria-label="Visitar perfil de Matheus Thurler no GitHub"
        target="_blank"
        href="https://github.com/Matheus-Thurler"
        class="hover:text-gray-400"
      >
        <Icon size="24" name="uil:github" />
      </a>
      <a
        aria-label="Visitar perfil de Matheus Thurler no LinkedIn"
        target="_blank"
        href="https://www.linkedin.com/in/matheus-thurler-34519870/"
        class="hover:text-gray-400"
      >
        <Icon size="24" name="uil:linkedin" />
      </a>
      <a
        aria-label="Visitar canal de Matheus Thurler no YouTube"
        target="_blank"
        href="https://www.youtube.com/channel/UCHVZvp_RfNpwfATmQ-NaDyw"  class="hover:text-gray-400"
      >
        <Icon size="24" name="uil:youtube" />
      </a>
      <button
        :aria-label="$colorMode.preference == 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
        @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
        class="hover:text-gray-400"
      >
        <Icon size="24" :name="$colorMode.preference == 'dark' ? 'material-symbols:dark-mode' : 'solar:sun-2-bold-duotone'" />
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden absolute top-20 left-0 w-full bg-gray-700 text-white p-5 space-y-5 shadow-lg">
      <NuxtLink @click="toggleMenu" to="/articles" class="block hover:text-gray-400">
        Articles
      </NuxtLink>
      <div class="space-y-3">
        <a target="_blank" href="https://gitlab.com/matheusthurler" class="flex items-center space-x-3 hover:text-gray-400">
          <Icon size="24" name="uil:gitlab" />
          <span>GitLab</span>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/matheus-thurler-34519870/" class="flex items-center space-x-3 hover:text-gray-400">
          <Icon size="24" name="uil:linkedin" />
          <span>LinkedIn</span>
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCHVZvp_RfNpwfATmQ-NaDyw" class="flex items-center space-x-3 hover:text-gray-400">
          <Icon size="24" name="uil:youtube" />
          <span>YouTube</span>
        </a>
        <button
          :aria-label="$colorMode.preference == 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'"
          @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark'); toggleMenu();"
          class="flex items-center space-x-3 hover:text-gray-400 w-full text-left"
        >
          <Icon size="24" :name="$colorMode.preference == 'dark' ? 'material-symbols:dark-mode' : 'solar:sun-2-bold-duotone'" />
          <span>Tema</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const colorMode = useColorMode();
type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>