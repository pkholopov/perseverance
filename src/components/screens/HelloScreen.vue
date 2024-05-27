<template>
  <div ref="container" class="relative flex flex-col">
    <canvas ref="cnv" class="canvas self-center sticky top-0 -z-10"></canvas>
    <div class="content -mt-[100dvh] text-white flex flex-col items-center xl:items-end">
        <div class="h-dvh flex items-center p-4 lg:p-12">
          <h1 class="text-4xl md:text-7xl xl:text-9xl uppercase text-transparent text-stroke-light xl:text-stroke font-nasalization">Perseverance</h1>
        </div>
        <div class="description self-center lg:self-end text-2xl lg:text-4xl w-full xl:w-8/12 mb-[110vh] bg-gray-500/40 p-4 lg:p-12 *:indent-8 text-justify">
          <p class="mb-4">Марсоход &laquoПерсеверанс&raquo (Perseverance), созданный в 2020 году, основан на конфигурации предыдущего марсохода — Curiosity, созданного лабораторией реактивного движения (JPL).</p>
          <p class="mb-4">Он размером с автомобиль: около 3 метров в длину (без учёта роботизированой руки), 2,7 метра в ширину и 2,2 метра в высоту. Но, при весе в 1025 килограммов, он весит даже меньше, чем компактный автомобиль.</p>
          <p>В некотором смысле, детали марсохода похожи на то, что нужно любому живому существу, чтобы оно оставалось "живым" и могло исследовать мир.</p>
        </div>
        
      </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

const container = ref(null);
const cnv = ref(null);

onMounted(() => {
  handleScroll();
})


function handleScroll() {
  
  const ctx = cnv.value.getContext('2d');

  const frameCount = 67;
  const currentFrame = (index) => (
    `seq/1_${index.toString().padStart(5, '0')}.jpg`
  )
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const cover = (image) => {
    const imageRatio = image.height / image.width;
    const winRatio = window.innerHeight / window.innerWidth;
    if (imageRatio > winRatio) {
      const h = window.innerWidth * imageRatio
      ctx.drawImage(image, 0, (window.innerHeight - h) / 2, window.innerWidth, h)
    } else {
      const w = window.innerWidth * winRatio / imageRatio
      ctx.drawImage(image, (window.innerWidth - w) / 2, 0, w, window.innerHeight)
    }
    
  }

  const img = new Image()
  img.src = currentFrame(1);
  cnv.value.width = document.querySelector('html').clientWidth;
  cnv.value.height = document.querySelector('html').clientHeight;
  img.onload = function(){
    cover(img);
  }

  const updateImage = (index) => {
    img.src = currentFrame(index);
    cover(img);
  }

  window.addEventListener('scroll', () => {  
    const distanceFromTop = window.scrollY + container.value.getBoundingClientRect().top;
    const rawPercentScrolled = (window.scrollY - distanceFromTop) / (container.value.scrollHeight - window.innerHeight);
    const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(percentScrolled * frameCount)
    );
    
    requestAnimationFrame(() => updateImage(frameIndex + 1))
  });

  window.addEventListener('resize', () => {
    cnv.value.width = document.querySelector('html').clientWidth;
    cnv.value.height = document.querySelector('html').clientHeight;
    cover(img);
  });

  preloadImages();


}

</script>

<style>
.canvas {
  animation: fadeout linear forwards;
  animation-timeline: view();
  animation-range: contain 70%;
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
