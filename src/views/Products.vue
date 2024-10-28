<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const products = [
  {
    id: 1,
    name: 'Panic Button + GPS',
    desc: 'Panic Button dengan GPS adalah perangkat keamanan inovatif yang dirancang untuk memberikan perlindungan dan rasa aman bagi pengguna dalam situasi darurat. Dengan teknologi pelacakan GPS yang canggih, perangkat ini memastikan bahwa bantuan dapat dengan cepat dan akurat mencapai lokasi pengguna.',
    img: '/assets_image/assest_image_products/panic-button-gps.png'
  },
  {
    id: 2,
    name: 'Panic Button + Kamera',
    desc: 'Panic Button dengan GPS dan Kamera adalah perangkat keamanan canggih yang dirancang untuk memberikan perlindungan dan keamanan optimal bagi pengguna dalam situasi darurat. Dengan teknologi terbaru, perangkat ini tidak hanya memungkinkan pengguna untuk meminta bantuan dengan satu sentuhan, tetapi juga melacak lokasi mereka dan merekam situasi sekitar secara real-time.',
    img: '/assets_image/assest_image_products/panic-button-kamera.png'
  },
  {
    id: 3,
    name: 'Panic Button + Basic',
    desc: 'Panic Button Basic adalah solusi keamanan sederhana namun efektif yang dirancang untuk memberikan rasa aman dan ketenangan bagi pengguna dalam situasi darurat. Dengan desain yang mudah digunakan, perangkat ini memungkinkan pengguna untuk meminta bantuan hanya dengan satu sentuhan.',
    img: '/assets_image/assest_image_products/panic-button-basicc.png'
  }
];

const showPopup = ref(false);
const selectedProduct = ref(null);

const openPopup = (product) => {
  selectedProduct.value = product;
  showPopup.value = true;
  document.body.style.overflow = 'hidden';
};

const closePopup = () => {
  showPopup.value = false;
  document.body.style.overflow = '';
};

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <section id="products" class="container px-20 font-poppins py-24">
    <p class="text-4xl">Products</p>
    <div class="flex gap-24 mt-10 ml-10">
      <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg p-5 drop-shadow-2xl"
      >
        <img :src="product.img" :alt="product.name" class="w-full h-auto">
        <p class="text-lg mt-2 font-medium">{{ product.name }}</p>
        <button
            @click="openPopup(product)"
            class="bg-transparent border-2 border-mediumRed py-2 px-5 text-sm rounded-lg mt-2"
        >
          Detail Produk
        </button>
      </div>
    </div>

    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-20">
      <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <span class="flex justify-center items-center">
          <img :src="selectedProduct?.img" :alt="selectedProduct?.name" class="xl:w-96 lg:w-44 h-auto">
        </span>
        <h2 class="text-xl mb-4 mt-5 flex justify-center items-center">{{ selectedProduct?.name }}</h2>
        <p class="text-center text-xs">{{ selectedProduct?.desc }}</p>
        <button @click="closePopup" class="bg-red-500 text-white py-2 px-4 rounded mt-4">Tutup</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
