<template>
  <div class="fixed z-10 top-4 left-4 text-4xl text-white cursor-pointer" @click="$emit('openMenu')">☰</div>
</template>

<script setup>
defineEmits(['openMenu'])
</script>

