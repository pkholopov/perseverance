<template>
  <MenuButton @open-menu="isMenuOpen = !isMenuOpen" />
  <div :class="{ ['opacity-0']: !isMenuOpen }" class="fixed top-4 right-[50%] z-10 transition-all">
    <MainMenu />
  </div>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import MenuButton from '@/components/MenuButton.vue';
import MainMenu from '@/components/MainMenu.vue';

const isMenuOpen = ref(false);
</script>
