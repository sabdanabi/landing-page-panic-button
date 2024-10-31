<script setup>
  import {onMounted, onBeforeUnmount, ref} from 'vue';
  const isScrolled = ref(false);
  const activeIndex2 = ref('1');
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
  };

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

  <div :class="['container mx-auto flex justify-between items-center font-poppins z-10', isScrolled ?
  'fixed top-0 left-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg z-[9999]' : 'absolute top-0 left-0 bg-transparent mx-auto']">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#FFFFFF"
        text-color="#666666"
        active-text-color="#DA1002"
        @select="handleSelect"
    >
      <el-menu-item index="1">
        <img src="/assets_image/logo-panic-button.png" alt="image-logo" class="w-12 mb-2 md:mr-20 mr-36"></el-menu-item>
      <el-sub-menu index="2">
        <template #title>Menus</template>
        <el-menu-item index="2-1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/#about">About</router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/#products">Product</router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/#fuatures">Fuatures Apps</router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/#review">Review</router-link></el-menu-item>
        <el-menu-item index="2-6"><router-link to="/#footer">Contact</router-link></el-menu-item>
      </el-sub-menu>
      <el-menu-item index="4">
        <div class="flex justify-center items-center gap-2">
          <img src="/assets_image/playstore-logo.png" alt="image" class="md:w-4 xl:w-5 mx-auto w-5 h-5">
          <a href="https://play.google.com" class="md:text-xs xl:text-base md:hidden">Get Apps</a>
        </div>
      </el-menu-item>
    </el-menu>
    <div class="h-6" />
  </div>
</template>

<style scoped>

</style>