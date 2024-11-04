<script setup>
import { Icon } from "@iconify/vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const userReviews = [
  {
    namaUser: "Siti Nurhaliza",
    reviewUser: "Aplikasi Tombol Panik sangat membantu untuk mengelola dan membeli Panic Button sesuai kebutuhan. Fitur pencariannya memudahkan",
    profileUser: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    namaUser: "Rahmat Pradana",
    reviewUser: "Sangat puas dengan aplikasi ini! Proses pemesanan cepat, dan saya merasa lebih aman dengan adanya Panic Button yang sesuai kebutuhan.",
    profileUser: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    namaUser: "Lia Kusuma",
    reviewUser: "Aplikasi yang luar biasa. Saya bisa melihat berbagai pilihan Panic Button dan memilih sesuai kebutuhan. Prosesnya sangat mudah dan efisien!",
    profileUser: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    namaUser: "Dedi Irawan",
    reviewUser: "Panic Button yang tersedia sangat lengkap dan aplikasinya mudah digunakan. Saya senang bisa mengelola semuanya dari satu tempat.",
    profileUser: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    namaUser: "Ayu Wulandari",
    reviewUser: "Fitur pemesanan dan pengelolaan alat Panic Button di aplikasi ini sangat membantu. Sekarang saya bisa mengatur kebutuhan keamanan dengan lebih mudah.",
    profileUser: "https://randomuser.me/api/portraits/women/5.jpg"
  },
];
const repeatedReviews = [...userReviews, ...userReviews,  ...userReviews,];

const splideOptionsLTR = {
  type: 'loop',
  direction: 'ltr',
  perPage: 4,
  gap: '20rem',
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 1,
  },
};

const splideOptionsRTL = {
  type: 'loop',
  direction: 'rtl',
  perPage: 4,
  gap: '20rem',
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 1,
  },
};
</script>

<template>
  <section id="review" class="px-8 font-poppins pt-16 md:px-20 lg:px-20 xl:px-20">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <p class="xl:text-4xl lg:text-3xl md:text-2xl text-base font-medium 3xl:text-6xl">Testimoni dari pelanggan</p>
        <article class="lg:mt-5 xl:mt-5 mt-1 lg:w-[500px] xl:w-[500px] xl:text-sm lg:text-xs
        text-mediumGrey md:mt-2 md:text-sm md:w-72 md:ml-3 text-sm 3xl:text-2xl 3xl:w-[800px]">
          Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
        </article>
      </div>
    </div>

    <div class="wrapper">
      <Splide :options="splideOptionsLTR" :extensions="{ AutoScroll }">
        <SplideSlide v-for="(review, index) in repeatedReviews" :key="'left-' + index">
          <div class="slide-content  bg-white shadow-lg rounded-lg p-6 w-96 my-5">
            <p class="2xl:text-xs mb-4 h-16">{{ review.reviewUser }}</p>
            <div class="flex">
              <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10" :src="review.profileUser" :alt="review.namaUser" />
              <div class="ml-4">
                <p class="xl:text-base lg:text-sm">{{ review.namaUser }}</p>
                <div class="flex items-center text-yellow-300">
                  <Icon icon="material-symbols:star" v-for="i in 5" :key="i" />
                  <p class="ml-1 font-medium text-black text-xs">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>

      <Splide :options="splideOptionsRTL" :extensions="{ AutoScroll }">
        <SplideSlide v-for="(review, index) in repeatedReviews" :key="'right-' + index">
          <div class="slide-content rtl-content bg-white shadow-lg rounded-lg p-6 w-96 my-5">
            <p class="2xl:text-xs mb-4 h-16 text-start">{{ review.reviewUser }}</p>
            <div class="flex">
              <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10" :src="review.profileUser" :alt="review.namaUser" />
              <div class="ml-4">
                <p class="xl:text-base lg:text-sm text-start">{{ review.namaUser }}</p>
                <div class="flex items-center text-yellow-300">
                  <Icon icon="material-symbols:star" v-for="i in 5" :key="i" />
                  <p class="ml-1 font-medium text-black text-xs">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  overflow: hidden;
  mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
  );
}

.rtl-content {
  direction: ltr;
}
</style>
