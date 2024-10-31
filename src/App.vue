<script setup>
  import Home from "@/views/Home.vue";
  import Navbar from "@/components/Navbar.vue";
  import DisplayApps from "@/views/DisplayApps.vue";
  import About from "@/views/About.vue";
  import FuaturesApps from "@/views/FuaturesApps.vue";
  import Products from "@/views/Products.vue";
  import ReviewCustomer from "@/views/ReviewCustomer.vue";
  import FooterComponent from "@/views/Footer.vue";
  import Intructios from "@/views/Intructios.vue";
  import FloatingButton from "@/components/FloatingButton.vue";
  import HamburgerMenus from "@/components/HamburgerMenus.vue";
</script>

<template>
    <div class="hidden md:block lg:block xl:block">
      <Navbar/>
    </div>
    <div class="block md:hidden lg:hidden xl:hidden">
      <HamburgerMenus/>
    </div>
      <FloatingButton/>
    <Home/>
    <DisplayApps/>
    <About/>
    <FuaturesApps/>
    <Intructios/>
    <Products/>
    <ReviewCustomer/>
    <FooterComponent/>
</template>

<style scoped>

</style>
