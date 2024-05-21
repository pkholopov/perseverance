<template>
  <div>
    <div v-if="weatherBySols">
      <table class="table-fixed w-full">
        <thead class="bg-gray-100 border-b">
          <tr class="*:pt-4 *:font-normal">
            <th>Дата</th>
            <th>Сол</th>
            <th colspan="2">Температура воздуха</th>
            <th>Давление</th>
            <th>Восход</th>
            <th>Закат</th>
          </tr>
          <tr class="*:pb-4 *:font-normal">
            <th colspan="2"></th>
            <th>Минимум</th>
            <th>Максимум</th>
            <th colspan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sol in weatherBySols"  class="*:p-4 *:text-center divide-x even:bg-gray-100">
            <td>{{ sol.terrestrial_date }}</td>
            <td>{{ sol.sol }}</td>
            <!-- <td>{{ sol.min_temp === '--' ? 'Нет данных' : sol.min_temp + '&#176C' }}</td> -->
            <td>{{ temperature(sol.min_temp) }}</td>
            <td>{{ temperature(sol.max_temp) }}</td>
            <td>{{ sol.pressure }} Па</td>
            <td>{{ sol.sunrise }}</td>
            <td>{{ sol.sunset }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import {weatherApi} from '@/api/weatherApi';
import { onMounted, ref } from 'vue';

const weatherBySols = ref(null);

const getWeather = async () => {
  const response = await weatherApi.get()
  weatherBySols.value = response.data.sols.reverse();
}

const temperature = (temp) => {
  if(temp === '--') return 'Нет данных'
  temp = Math.round(temp)
  return temp + '°C'
}

onMounted(async () => {
  getWeather()
})
</script>
