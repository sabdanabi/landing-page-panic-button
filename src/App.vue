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

</script>

<template>
  <body class="">
    <Navbar/>
    <Home/>
    <DisplayApps/>
    <About/>
    <FuaturesApps/>
    <Intructios/>
    <Products/>
    <ReviewCustomer/>
    <FooterComponent/>
  </body>
</template>

<style scoped>
</style>
