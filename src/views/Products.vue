<script setup>
  import { ref, onUnmounted, onMounted  } from 'vue';
  import {Icon} from "@iconify/vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import {usePanicButtonStore} from "@/stores/panicButtonTypeStore.js";


  const products = [
    {
      id: 1,
      name: 'Panic Button + GPS',
      price: 150000,
      desc: 'Panic Button dengan GPS adalah perangkat keamanan inovatif yang dirancang untuk memberikan perlindungan dan rasa aman bagi pengguna dalam situasi darurat. Dengan teknologi pelacakan GPS yang canggih, perangkat ini memastikan bahwa bantuan dapat dengan cepat dan akurat mencapai lokasi pengguna.',
      img: '/assets_image/assest_image_products/panic-button-gps.png'
    },
    {
      id: 2,
      name: 'Panic Button + Kamera',
      price: 150000,
      desc: 'Panic Button dengan GPS dan Kamera adalah perangkat keamanan canggih yang dirancang untuk memberikan perlindungan dan keamanan optimal bagi pengguna dalam situasi darurat. Dengan teknologi terbaru, perangkat ini tidak hanya memungkinkan pengguna untuk meminta bantuan dengan satu sentuhan, tetapi juga melacak lokasi mereka dan merekam situasi sekitar secara real-time.',
      img: '/assets_image/assest_image_products/panic-button-kamera.png'
    },
    {
      id: 3,
      name: 'Panic Button + Basic',
      price: 150000,
      desc: 'Panic Button Basic adalah solusi keamanan sederhana namun efektif yang dirancang untuk memberikan rasa aman dan ketenangan bagi pengguna dalam situasi darurat. Dengan desain yang mudah digunakan, perangkat ini memungkinkan pengguna untuk meminta bantuan hanya dengan satu sentuhan.',
      img: '/assets_image/assest_image_products/panic-button-basicc.png'
    }
  ];

  const showPopup = ref(false);
  const selectedProduct = ref(null);

  const panicButtonStore = usePanicButtonStore();
  onMounted(() => {
    panicButtonStore.fetchPanicButtonTypes();
  })

  const openPopup = (product) => {
    selectedProduct.value = {
      name: product.name,
      price: product.subscription_price,
      desc: product.description,
      img: `https://api-panic-button.idaman.co.id/${product.image}`,
    };
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

  function formatRupiah(value) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(value);
  }

</script>

<template>
  <section id="products" class="xl:px-20 lg:px-20 font-poppins md:py-24 xl:py-24 lg:py-24 md:px-12 px-10">
    <p class="md:text-4xl xl:text-4xl 3xl:text-6xl lg:text-4xl text-xl font-medium 3xl:mt-10">Products</p>

    <div class="hidden md:block xl:block lg:block 3xl:py-48">
      <div class="flex xl:gap-16 lg:gap-8 md:gap-6 3xl:gap-28 mt-10 ml-10 justify-center items-center">
        <div v-for="(item) in panicButtonStore.panicButtonTypes" :key="item.id">
          <div class="bg-white rounded-lg p-5 drop-shadow-2xl">
            <img :src="`https://api-panic-button.idaman.co.id/${item.image}`" alt="Panic Button Image"
                 class="object-cover mx-auto w-[90%] h-60 3xl:w-[500px]">
            <p class="xl:text-lg lg:text-lg mt-2 font-medium md:text-xs 3xl:text-3xl">{{ item.name }}</p>
<!--            <p class=" text-xs 3xl:text-2xl my-2">{{item.description}}</p>-->
            <p class="md:text-xs md:text-mediumGrey xl:text-sm 3xl:text-2xl 3xl:py-2">{{ item.subscription_price }}/bulan</p>
            <button
                @click="openPopup(item)"
                class="bg-transparent border-2 border-mediumRed
                        py-2 px-5 text-sm rounded-lg mt-2 md:p-2 md:text-xs 3xl:text-xl">
              Detail Produk
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden xl:hidden lg:hidden block">
      <Swiper
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :navigation="true"
          class="mt-10"
      >
      <SwiperSlide
          v-for="product in products"
          :key="product.id"
          class="flex justify-center rounded-lg bg-white"
      >
        <div class="w-36 h-64 mx-auto">
          <img :src="product.img" :alt="product.name" class="object-cover w-full h-auto" />
          <p class="xl:text-lg lg:text-lg font-medium md:text-xs text-xs mt-3">
            {{ product.name }}</p>
          <p class="text-xs text-mediumGrey font-normal xl:text-sm 3xl:text-2xl 3xl:py-2 xs:my-1">{{ formatRupiah(product.price) }}/bulan</p>
          <button
              @click="openPopup(product)"
              class="bg-transparent border-2 border-mediumRed text-xs py-1 px-3 rounded-lg md:p-2 md:text-xs"
          >
            Detail Produk
          </button>
        </div>
      </SwiperSlide>
      </Swiper>
    </div>

    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div class="bg-white p-8 rounded-lg shadow-lg relative  w-[50%]">
        <button @click="closePopup" class="absolute right-6 top-5 text-mediumRed">
          <Icon icon="line-md:close" class="text-xl" />
        </button>
        <img :src="selectedProduct?.img" :alt="selectedProduct?.name"
             class="object-cover mx-auto w- h-60 3xl:w-[500px] mb-4">
        <h2 class="text-lg font-medium">{{ selectedProduct?.name }}</h2>
        <p class="text-gray-600">{{ formatRupiah(selectedProduct?.price) }}/bulan</p>
        <p class="mt-2">{{ selectedProduct?.desc }}</p>
      </div>
    </div>

  </section>
</template>

<style scoped>

</style>
