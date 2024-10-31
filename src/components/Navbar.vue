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
      <nav :class="['mx-auto flex justify-between items-center pt-4 font-poppins px-16 z-10'
    , isScrolled ? 'fixed top-0 left-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg z-[9999]'
    : 'absolute top-0 left-0 bg-transparent mx-auto']">
        <img src="/assets_image/logo-panic-button.png" alt="image-logo" class="w-16 mb-2 md:mr-20 xl:mr-[519px] lg:mr-72  ">
        <div class="flex justify-between items-center 2xl:gap-32 lg:gap-1 md:gap-10 ">
          <ul class="flex space-x-9 xl:mr-10 2xl:mr-5 md:text-xs lg:mr-10 text-mediumGrey xl:text-base lg:text-sm">
            <li class="hover:text-mediumRed">
              <router-link to="/">Home</router-link></li>
            <li class="hover:text-mediumRed">
              <router-link to="/#about">About</router-link></li>
            <li class="hover:text-mediumRed">
              <router-link to="/#products">Product</router-link></li>
            <li class="hover:text-mediumRed">
              <router-link to="/#fuatures">Fuatures</router-link></li>
            <li class="hover:text-mediumRed">
              <router-link to="/#review">Review</router-link></li>
            <li class="hover:text-mediumRed">
              <router-link to="/#footer">Contact</router-link></li>
          </ul>
          <button class="bg-transparent border-2 border-mediumRed
          xl:py-3 xl:w-40 xl:px-2 md:w-10 rounded-lg flex justify-center items-center xl:gap-4 md:py-2">
            <img src="/assets_image/playstore-logo.png" alt="image" class="md:w-4 xl:w-5 mx-auto xl:mx-0">
            <a href="https://play.google.com" class="md:text-xs xl:text-base md:hidden xl:block">Get Apps</a>
          </button>
        </div>
      </nav>
</template>

<style scoped>

</style>