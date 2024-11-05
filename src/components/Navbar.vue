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
      <nav class="mx-auto flex justify-between items-center pt-4 font-poppins px-16 z-10 fixed bg-white drop-shadow-lg">
        <img src="/assets_image/logo-panic-button.png" alt="image-logo"
             class="w-16 mb-2 md:mr-20 3xl:mr-[1067px] xl:mr-[560px] lg:mr-72 2xl:w-20">
        <div class="flex justify-between items-center 3xl:gap-36 lg:gap-1 md:gap-10 2xl:gap-20">
          <ul class="flex space-x-9 xl:mr-10 3xl:gap-10 2xl:text-base xl:text-sm 3xl:text-2xl
          md:text-xs lg:mr-10 text-mediumGrey lg:text-sm">
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
          xl:py-1 xl:w-40 3xl:w-52 md:w-10 rounded-lg flex justify-center items-center xl:gap-4 md:py-2">
            <img src="/assets_image/playstore-logo.png" alt="image" class="md:w-4 xl:w-5 3xl:w-8 mx-auto xl:mx-0">
            <a href="https://play.google.com" class="md:text-xs xl:text-base md:hidden xl:block 3xl:text-lg">Get Apps</a>
          </button>
        </div>
      </nav>
</template>

<style scoped>

</style>