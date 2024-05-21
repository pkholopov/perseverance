<template>
  <div>
    <ul class="flex flex-row">
      <li v-for="menuItem in menuItems">
        <MenuItem :title="menuItem.title" :link="menuItem.link"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

const menuItems = [
  { title: 'Главная', link: '/' },
  { title: 'Погода', link: '/weather' },
  { title: 'Изображения', link: '/images' },
  { title: 'О ровере', link: '/about' },
]
</script>
