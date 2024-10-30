<script setup>
import { SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Icon } from "@iconify/vue";

const userReviews = [
  {
    namaUser: "Siti Nurhaliza",
    reviewUser: "Aplikasi Tombol Panik sangat membantu untuk mengelola dan membeli Panic Button sesuai kebutuhan. Fitur pencariannya memudahkan untuk menemukan produk yang diinginkan.",
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
  {
    namaUser: "Budi Santoso",
    reviewUser: "Aplikasi ini sangat praktis! Semua kebutuhan Panic Button tersedia, dan navigasinya sangat user-friendly. Terima kasih!",
    profileUser: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    namaUser: "Rina Setiawan",
    reviewUser: "Sangat direkomendasikan! Aplikasi ini memberikan banyak pilihan Panic Button yang sesuai kebutuhan keamanan kami.",
    profileUser: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    namaUser: "Arif Kurniawan",
    reviewUser: "Pengalaman yang luar biasa menggunakan aplikasi ini. Semua proses dari pencarian hingga pemesanan sangat efisien.",
    profileUser: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    namaUser: "Citra Amelia",
    reviewUser: "Saya sangat terbantu dengan aplikasi ini! Pilihan Panic Buttonnya banyak, dan saya bisa pesan dengan cepat.",
    profileUser: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    namaUser: "Fajar Pratama",
    reviewUser: "Aplikasi ini memberikan solusi yang saya cari untuk kebutuhan keamanan. Saya merasa lebih tenang dengan kemudahan mengelola Panic Button.",
    profileUser: "https://randomuser.me/api/portraits/men/10.jpg"
  }
];

</script>

<template>

  <section id="review" class=" md:px-20 lg:px-20 xl:px-20 px-8 font-poppins pt-16">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <p class="xl:text-4xl lg:text-3xl md:text-2xl text-base font-medium">Testimoni dari pelanggan</p>
        <article class="lg:mt-5 xl:mt-5 mt-1 lg:w-[500px] xl:w-[500px]
        xl:text-sm lg:text-xs text-mediumGrey md:mt-2 md:text-sm md:w-72 md:ml-3 text-sm">
          Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
        </article>
      </div>
    </div>

    <div class="mt-10 bg-[#e8e8e8] p-5 rounded-lg">
      <div class="scroll-container rounded-lg">
        <SplideSlide v-for="review in userReviews" :key="review.namaUser">
          <div class="slide-content md:h-52 lg:h-52 xl:h-52 h-48">
            <p class="xl:text-base lg:text-sm md:w-96 xl:w-96 lg:w-96 lg:h-24 md:h-24 xl:h-24 w-72 md:text-sm text-xs">{{review.reviewUser}}</p>
            <div class="flex items-center mt-3">
              <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10 h-14" :src="review.profileUser" :alt="review.namaUser">
              <div class="ml-4">
                <p class="xl:text-base lg:text-sm">{{review.namaUser}}</p>
                <div class="flex items-center text-yellow-300">
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                  <p class="ml-1 font-medium text-black">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #d1d5db transparent;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.slide-content {
  min-width: 300px;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
