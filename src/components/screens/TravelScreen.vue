<template>
  <div class="relative flex flex-col w-full" id="travel-screen">
      <div class="horizontal-wrap-sticky">
        <div class="horizontal-wrap">
          <div class="horizontal__content" id="card1">
            <p class="text-2xl lg:text-4xl p-12 xl:bg-gray-500/40 w-full xl:w-3/5 text-shadow">Запуск марсохода с Земли был осуществлён с помощью ракеты-носителя Atlas 3 июля 2020 года в 11:50 UTC</p>
          </div>
          <div class="horizontal__content" id="card2">
            <p class="text-2xl lg:text-4xl p-12 xl:bg-gray-500/40 w-full xl:w-3/5 text-shadow">Хотя в момент запуска Марс находился недалеко от земли (по космическим меркам), полёт занял почти семь месяцев</p>
          </div>
          <div class="horizontal__content last-paragraph" id="card3">
            <p class="text-2xl lg:text-4xl p-12 xl:bg-gray-500/40 w-full xl:w-3/5 text-shadow">В середине февраля 2021 года Perseverance добрался до красной планеты. Беззаботное странствование окончено. Впереди — сложная посадка</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#travel-screen {
  height: 400vh;
	overflow: visible;
  opacity: 0;
  animation: fadein linear forwards;
  animation-timeline: view();
  /* animation-range: entry; */

	view-timeline-name: --section-pin-tl;
	view-timeline-axis: block;
}

.horizontal-wrap-sticky {
	height: 100vh;
	/* width: 100vw; */
	position: sticky;
	top: 0;
	overflow-x: hidden;
}

.horizontal-wrap {
	height: 100vh;
	width: 300vw;

	will-change: transform;
	animation: linear move forwards;
	animation-timeline: --section-pin-tl;
	animation-range: contain 0% contain 100%;

  display: flex;
}

.horizontal__content {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

#card1 {
  background-image: url('@/assets/images/blue_marble.jpg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  animation: slideleft linear forwards;
  animation-timeline: --section-pin-tl;
  animation-range: exit-crossing;
}

#card2 {
  background-image: url('@/assets/images/pers.webp');
  background-repeat: no-repeat;
  background-position: left;
  animation: transit linear forwards;
  animation-timeline: --section-pin-tl;
  animation-range: contain;
}

#card3 {
  background-image: url('@/assets/images/mars.jpg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  animation: slideright linear forwards;
  animation-timeline: --section-pin-tl;
  animation-range: contain;
}


@keyframes move {
	to {
		transform: translateX(calc(-100% + 100vw));
	}
}

@keyframes fadein {
  entry 0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  entry 100% {
    opacity: 1;
    transform: translateY(0);
  }
  exit 0% {
    opacity: 1;
    transform: translateY(0) scale(1);
    transform-origin: right bottom;
  }
  exit 50% {
    opacity: 1;
  }
  exit 100% {
    opacity: 0;
    transform: translateY(150vh) scale(2);
    transform-origin: right bottom;
  }
}

@keyframes slideleft {
  from {
    background-position: left;
  }
  to {
    background-position: -50vw;
  }
}

@keyframes slideright {
  from {
    background-position: 100vw;
  }
  to {
    background-position: right;
  }
}

@keyframes transit {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}

@keyframes p-fadeout {
  from {
    opacity: 1;
    color: white;
  }
  to {
    opacity: 0;
    color: red;
  }
}

@keyframes scaleup {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2);
  }
}

</style>
