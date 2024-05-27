<template>
  <div class="w-full">
    <MenuButton @open-menu="isMenuOpen = !isMenuOpen"/>
    <div :class="{ ['opacity-0']: !isMenuOpen }" class="fixed top-4 right-[50%] z-10 transition-all">
      <MainMenu />
    </div>
    
    <HelloScreen />
    <TravelScreen />
    <LandingScreen />
  </div>
  
</template>

<script setup>
import { ref } from 'vue';

import MenuButton from '@/components/MenuButton.vue';
import MainMenu from '@/components/MainMenu.vue';
import HelloScreen from '../components/screens/HelloScreen.vue';
import TravelScreen from '@/components/screens/TravelScreen.vue';
import LandingScreen from '@/components/screens/LandingScreen.vue';

const isMenuOpen = ref(false);
</script>

<style scoped>

</style>
