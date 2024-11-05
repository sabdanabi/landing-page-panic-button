<script setup>
  import {onMounted, onBeforeUnmount, ref} from 'vue';

  const isMenuOpen = ref(false);

</script>

<template>

  <header class="flex items-center justify-between xs:gap-[330px] px-4 py-3 bg-white shadow-md fixed z-50 ">

      <img src="/assets_image/logo-panic-button.png" alt="" class="h-10"/>

    <button
        @click="isMenuOpen = !isMenuOpen"
        class="text-gray-700 focus:outline-none md:hidden"
    >
      <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
    <transition name="slide-down">
      <div
          v-if="isMenuOpen"
          class="absolute top-14 left-0 w-full h-72 bg-white z-10 flex flex-col md:hidden px-4 py-3 drop-shadow">
        <router-link to="/" class="style-menus-hamburger">Home</router-link>
        <router-link to="/#about" class="style-menus-hamburger">About</router-link>
        <router-link to="/#products" class="style-menus-hamburger">Product</router-link>
        <router-link to="/#fuatures" class="style-menus-hamburger">Fuatures</router-link>
        <router-link to="/#review" class="style-menus-hamburger">Review</router-link>
        <router-link to="/#footer" class="style-menus-hamburger">Contact</router-link>
        <button class="bg-transparent border-2 border-mediumRed rounded-lg flex justify-center items-center w-32 py-2">
          <img src="/assets_image/playstore-logo.png" alt="image" class="">
          <a href="https://play.google.com" class="x">Get Apps</a>
        </button>
      </div>
    </transition>
  </header>
</template>

<style scoped>

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>