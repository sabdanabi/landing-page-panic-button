<script setup>
import {onMounted, onBeforeUnmount, ref} from 'vue';

  const isScrolled = ref(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    isScrolled.value = scrollPosition > 50;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<template>
    <nav :class="['container mx-auto flex justify-between items-center pt-4 font-poppins px-16 z-10', isScrolled ? 'fixed top-0 left-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg z-[9999]' : 'absolute top-0 left-0 bg-transparent']">
    <img src="/assets_image/logo-panic-button.png" alt="image-logo" class="w-16 mb-2">
    <div class="flex justify-between items-center gap-32">
      <ul class="flex space-x-9 mr-10 text-mediumGrey">
        <li class="hover:text-mediumRed">
          <router-link to="/">Home</router-link></li>
        <li class="hover:text-mediumRed">
          <router-link to="/#about">About</router-link></li>
        <li class="hover:text-mediumRed">
          <router-link to="/#products">Product</router-link></li>
        <li class="hover:text-mediumRed">
          <router-link to="/#fuatures">Fuatures Apps</router-link></li>
        <li class="hover:text-mediumRed">
          <router-link to="/#review">Review</router-link></li>
        <li class="hover:text-mediumRed">
          <router-link to="/#footer">Contact</router-link></li>
      </ul>
      <button class="bg-transparent border-2 border-mediumRed py-2 px-8 rounded-lg flex gap-4">
        <img src="/assets_image/playstore-logo.png" alt="image">
          <a href="https://play.google.com">Get Apps</a>
      </button>
    </div>
  </nav>
</template>

<style scoped>

</style>