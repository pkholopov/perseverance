<template>
  <div id="landing-screen" class="relative">
    <div class="h-screen sticky top-0 -z-10" id="jezero"></div>
    <p class="text-9xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam aut ex, accusamus dolores voluptatem tempore fugiat nostrum, repellat recusandae dignissimos distinctio eligendi facilis earum quis. Corrupti cum placeat itaque!
    Excepturi ea mollitia, labore, aut odit culpa nisi fuga quibusdam minima optio explicabo repellendus necessitatibus! Deleniti voluptatibus commodi quis quisquam et nulla quod molestias blanditiis tempore, quidem tempora asperiores ipsam.
    Reiciendis nam saepe ut quae ea, nostrum ratione odit, id vel nulla laboriosam nemo dolorum velit facilis explicabo voluptates inventore dolore error nisi dolorem? Dignissimos fugiat doloribus sed ab eveniet.
    Expedita eaque dicta aliquid ducimus optio nobis culpa alias iusto, voluptatum commodi ea quam beatae quos voluptatem assumenda harum atque facilis dignissimos accusantium dolores. Odio magni error nihil fugiat sit.
    Optio, iusto assumenda. Ratione, ad cupiditate repellat dolorem ullam aperiam doloremque tempore neque debitis quia natus eligendi temporibus delectus eius voluptatibus? Quidem odio eius nesciunt eum similique, fuga deleniti tempore!</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
#landing-screen {
  animation: fadein linear forwards;
  animation-timeline: view();
}

#jezero {
  background-image: url('@/assets/images/jezero.png');
  background-size: cover;
  background-position: center;
  animation: closeup linear forwards;
  animation-timeline: view();
  animation-range: contain 0% contain 100%;
}

@keyframes fadein {
  entry 0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  entry 80% {
    opacity: 0;
  }
  entry 100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes closeup {
  from {
    background-size: 100%;
  }
  to {
    background-size: 200%;
  }
}
</style>
