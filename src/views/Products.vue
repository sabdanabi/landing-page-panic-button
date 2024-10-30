<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import {Icon} from "@iconify/vue";

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
  <section id="products" class="container xl:px-20 lg:px-20 font-poppins py-24 md:px-12">
    <p class="text-4xl">Products</p>
    <div class="flex xl:gap-32 lg:gap-24 md:gap-6 mt-10 ml-10 justify-center ">
      <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg p-5 drop-shadow-2xl"
      >
        <img :src="product.img" :alt="product.name" class="w-full h-auto">
        <p class="xl:text-lg lg:text-lg mt-2 font-medium md:text-xs">{{ product.name }}</p>
        <button
            @click="openPopup(product)"
            class="bg-transparent border-2 border-mediumRed
            py-2 px-5 text-sm rounded-lg mt-2 md:p-2 md:text-xs"
        >
          Detail Produk
        </button>
      </div>
    </div>

    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex
    items-center justify-center mt-20 md:mr-56 xl:mr-0 lg:mr-0">
      <div class="bg-white p-8 rounded-lg md:w-[480px] xl:w-[600px] md:h-80 shadow-lg  flex justify-between relative">
        <button @click="closePopup" class="ml-48 absolute right-6 top-5 text-mediumRed">
          <Icon icon="line-md:close"/></button>
        <img :src="selectedProduct?.img" :alt="selectedProduct?.name"
             class="xl:w-96 lg:w-44 h-auto md:h-52 md:mt-6 flex justify-center mr-2 items-center md:w-52">
        <div>
          <h2 class="text-xl mb-2 mt-5 md:text-base font-medium">{{ selectedProduct?.name }}</h2>
          <p class=" text-xs">{{ selectedProduct?.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
