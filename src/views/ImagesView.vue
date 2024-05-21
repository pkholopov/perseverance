<template>
  <div class="flex flex-row">
    <div>
      <form class="flex flex-col">
        <label for="num">Number of images</label>
        <input v-model.lazy="num" type="number" name="num" id="num" />
        <label for="page">Page</label>
        <input v-model="page" type="number" name="page" id="page" />
        <label v-for="camera in cameras">
          <input type="checkbox" v-model="checkedCameras" name="cameras" id="cameras"  :value="camera.value">
          {{ camera.title }}
        </label>
        
        <button type="submit" @click.prevent="getImages">Submit</button>
      </form>
    </div>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else class="flex flex-row flex-wrap gap-4">
      <img v-for="image in data?.images" :src="image?.image_files.small" class="aspect-square object-contain"/>
    </div>
  </div>
  
</template>

<script setup>
import { imagesApi } from '@/api/imagesApi';
import { onMounted, ref, shallowRef, watchEffect } from 'vue';

const data = shallowRef(null);
const page = ref(1);
const num = ref(20);
const checkedCameras = ref([])

const isLoading = ref(false);

const cameras = [
  {
    title: 'Mastcam-Z - Left',
    value: 'MCZ_LEFT'
  },
  {
    title: 'Mastcam-Z - Right',
    value: 'MCZ_RIGHT'
  },
]

// const getImages = async (searchQuery) => {
//   const response = await imagesApi({
//     params: {
//       num: "20",
//       page: "0",
//       search: searchQuery
//     }
//   });
//   data.value = response.data;
// }

watchEffect(async () => {
  // getImages(checkedCameras.value.join(''));
  isLoading.value = true;
  const response = await imagesApi({
    params: {
      num: num.value,
      page: page.value - 1,
      search: checkedCameras.value.join('|')
    }
  });
  data.value = response.data;
  isLoading.value = false;
})

// onMounted(async () => {
//   getImages('');
// })
</script>
