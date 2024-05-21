<template>
  <RouterLink :to="link" class="text-white h-10 p-4">{{ title }}</RouterLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>
