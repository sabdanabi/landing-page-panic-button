<script setup>
  import {onMounted, onBeforeUnmount, ref} from 'vue';
  const isScrolled = ref(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    isScrolled.value = scrollPosition > 50;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

</script>

<template>
      <nav class="mx-auto flex justify-between items-center w-full pt-4 font-poppins px-16 z-10 fixed bg-white drop-shadow-lg">
        <img src="/assets_image/logo-panic-button.png" alt="image-logo"
             class="w-16 mb-2 2xl:w-20">
        <div class="flex justify-between items-center 3xl:gap-36 lg:gap-1 md:gap-10 2xl:gap-20">
          <ul class="flex space-x-9 xl:mr-10 3xl:gap-10 2xl:text-base xl:text-sm 3xl:text-2xl md:text-xs lg:mr-10 text-mediumGrey lg:text-sm">
            <li class="hover:text-mediumRed">
              <a href="/home" @click.prevent="scrollToSection('home')">Home</a>
            </li>
            <li class="hover:text-mediumRed">
              <a href="/about" @click.prevent="scrollToSection('about')">About</a>
            </li>
            <li class="hover:text-mediumRed">
              <a href="/products" @click.prevent="scrollToSection('products')">Product</a>
            </li>
            <li class="hover:text-mediumRed">
              <a href="/fuatures" @click.prevent="scrollToSection('fuatures')">Features</a>
            </li>
            <li class="hover:text-mediumRed">
              <a href="/review" @click.prevent="scrollToSection('review')">Review</a>
            </li>
            <li class="hover:text-mediumRed">
              <a href="/footer" @click.prevent="scrollToSection('footer')">Contact</a>
            </li>
          </ul>
          <button class="bg-transparent border-2 border-mediumRed rounded-full flex justify-center items-center xl:gap-4">
            <router-link to="/profil">
              <img src="/assets_image/img.png" alt="image" class="md:w-10">
            </router-link>
          </button>
        </div>
      </nav>
</template>

<style scoped>

</style>