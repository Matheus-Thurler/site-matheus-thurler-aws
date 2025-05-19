<template>
  <div class="h-20 px-5 bg-gray-900 shadow-md text-white w-full flex justify-between items-center">
    <!-- Logo -->
    <div>
      <nuxt-link to="/">
        Matheus Thurler
      </nuxt-link>
    </div>

    <!-- Botão Hamburguer (Visível em Mobile) -->
    <div class="md:hidden">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <Icon name="heroicons-outline:menu-alt-3" size="30" />
      </button>
    </div>

    <!-- Links do Menu (Visível em Desktop, Oculto em Mobile) -->
    <div class="hidden md:flex space-x-5">
      <NuxtLink to="/articles">
        Articles
      </NuxtLink>
    </div>

    <!-- Ícones de Redes Sociais e Tema (Visível em Desktop, Oculto em Mobile) -->
    <div class="hidden md:flex space-x-5 items-center">
      <a target="_blank" href="https://github.com/Matheus-Thurler" class="hover:text-gray-400">
        <Icon size="24" name="uil:github" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/matheus-thurler-34519870/" class="hover:text-gray-400">
        <Icon size="24" name="uil:linkedin" />
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCHVZvp_RfNpwfATmQ-NaDyw" class="hover:text-gray-400">
        <Icon size="24" name="uil:youtube" />
      </a>
      <button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')" class="hover:text-gray-400">
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
        <button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')" class="flex items-center space-x-3 hover:text-gray-400">
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
