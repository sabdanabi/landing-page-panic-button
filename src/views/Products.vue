<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
const selectedProduct = ref('');

const openPopup = (productName) => {
  selectedProduct.value = productName;
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

</script>

<template>
  <section id="products" class="container px-20 font-poppins py-24">
    <p class="text-4xl">Products</p>
    <div class="flex gap-24 mt-10 ml-10">

      <div class="bg-white rounded-lg p-5 drop-shadow-2xl">
        <img src="/assets_image/assest_image_products/panic-button-gps.png" alt="image-product">
        <p class="text-lg mt-2 font-medium">Panic Button + gps</p>
        <button @click="openPopup('Panic Button + GPS')" class="bg-transparent border-2 border-mediumRed py-2 px-5 text-sm rounded-lg mt-2">Detail Produk</button>
      </div>

      <div class="bg-white rounded-lg p-5 drop-shadow-2xl">
        <img src="/assets_image/assest_image_products/panic-button-kamera.png" alt="image-product">
        <p class="text-lg mt-2 font-medium">Panic Button + Kamera</p>
        <button @click="openPopup('Panic Button + Kamera')" class="bg-transparent border-2 border-mediumRed py-2 px-5 text-sm rounded-lg mt-2">Detail Produk</button>
      </div>

      <div class="bg-white rounded-lg p-5 drop-shadow-2xl">
        <img src="/assets_image/assest_image_products/panic-button-basicc.png" alt="image-product">
        <p class="text-lg mt-2 font-medium">Panic Button + Basic</p>
        <button @click="openPopup('Panic Button + Basic')" class="bg-transparent border-2 border-mediumRed py-2 px-5 text-sm rounded-lg mt-2">Detail Produk</button>
      </div>
    </div>

    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <span class="flex justify-center items-center">
          <img src="/assets_image/assest_image_products/panic-button-gps.png" alt="image-product">
        </span>
        <h2 class="text-xl mb-4 mt-5 flex justify-center items-center">{{ selectedProduct }}</h2>
        <p class="text-center text-xs">Panic Button dengan GPS adalah perangkat keamanan
          inovatif yang dirancang untuk memberikan perlindungan
          dan rasa aman bagi pengguna dalam situasi darurat. Dengan
          teknologi pelacakan GPS yang canggih, perangkat ini memastikan
          bahwa bantuan dapat dengan cepat dan akurat mencapai lokasi pengguna.</p>
        <button @click="closePopup" class="bg-red-500 text-white py-2 px-4 rounded mt-4">Tutup</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
