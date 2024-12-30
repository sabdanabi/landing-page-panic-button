<script setup>

import FuaturesApps from "@/views/FuaturesApps.vue";
import Navbar from "@/components/Navbar.vue";
import HamburgerMenus from "@/components/HamburgerMenus.vue";
import About from "@/views/About.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import ReviewCard2 from "@/components/ReviewCard2.vue";
import FooterComponent from "@/views/Footer.vue";
import DisplayApps from "@/views/DisplayApps.vue";
import Intructios from "@/views/Intructios.vue";
import Home from "@/views/Home.vue";
import Products from "@/views/Products.vue";
import Reviews from "@/views/Reviews.vue";
import ReviewCustomer from "@/views/ReviewCustomer.vue";
import Information from "@/views/Information.vue";
import Invoice from "@/views/Invoice.vue";
</script>

<template>
  <div class="hidden md:block lg:block xl:block">
    <Navbar/>
  </div>
  <div class="block md:hidden lg:hidden xl:hidden">
    <HamburgerMenus/>
  </div>
<!--  <FloatingButton/>-->
  <Home/>
  <DisplayApps/>
  <About/>
  <FuaturesApps/>
  <Intructios/>
  <Products/>
`  <Information/>
`<!--  <Invoice/>-->
  <ReviewCard2/>
  <FooterComponent/>
</template>

<style scoped>

</style>