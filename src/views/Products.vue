<script setup>
  import { ref, onUnmounted } from 'vue';
  import {Icon} from "@iconify/vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';


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
  <section id="products" class="xl:px-20 lg:px-20 font-poppins md:py-24 xl:py-24 lg:py-24 md:px-12 px-10 h-screen">
    <p class="md:text-4xl xl:text-4xl 3xl:text-6xl lg:text-4xl text-xl font-medium 3xl:mt-10">Products</p>

    <div class="hidden md:block xl:block lg:block 3xl:py-48">
      <div class="flex xl:gap-16 lg:gap-8 md:gap-6 3xl:gap-28 mt-10 ml-10 justify-center items-center">
        <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-lg p-5 drop-shadow-2xl"
        >
          <img :src="product.img" :alt="product.name" class="w-full h-auto 3xl:w-[500px]">
          <p class="xl:text-lg lg:text-lg mt-2 font-medium md:text-xs 3xl:text-3xl">{{ product.name }}</p>
          <button
              @click="openPopup(product)"
              class="bg-transparent border-2 border-mediumRed
            py-2 px-5 text-sm rounded-lg mt-2 md:p-2 md:text-xs 3xl:text-xl"
          >
            Detail Produk
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden xl:hidden lg:hidden block">
      <Swiper
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :navigation="true"
          class="mt-10 "
      >
        <SwiperSlide
            v-for="product in products"
            :key="product.id"
            class="flex justify-center rounded-lg bg-white"
        >
          <div class="w-36 h-64 mx-auto">
            <img :src="product.img" :alt="product.name" class="w-full h-auto">
            <p class="xl:text-lg lg:text-lg font-medium md:text-xs text-xs my-3">{{ product.name }}</p>
            <button
                @click="openPopup(product)"
                class="bg-transparent border-2 border-mediumRed text-xs py-1 px-3 rounded-lg mt-2 md:p-2 md:text-xs"
            >
              Detail Produk
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>

    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex
    items-center justify-center mt-20 md:mr-42 xl:mr-0 lg:mr-0 z-50">
      <div class="bg-white p-8 rounded-lg md:w-[480px] xl:w-[600px] w-72 h-96 md:h-80 shadow-lg  md:flex justify-between relative">
        <button @click="closePopup" class="ml-48 absolute right-6 top-5 text-mediumRed">
          <Icon icon="line-md:close"/></button>
        <img :src="selectedProduct?.img" :alt="selectedProduct?.name"
             class="xl:w-96 lg:w-44 w-20 h-20 md:h-52 md:mt-6 flex justify-center mr-2 items-center md:w-52">
        <div>
          <h2 class="text-sm mb-2 mt-2 md:text-base font-medium">{{ selectedProduct?.name }}</h2>
          <p class=" text-xs">{{ selectedProduct?.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper-pagination-bullet {
  background-color: #cccccc;
}

.swiper-pagination-bullet-active {
  background-color: #FF6347;
}
</style>
