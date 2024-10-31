<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
  <section id="home" class="font-poppins container md:mx-auto">
    <div class="flex justify-center items-center xl:mt-40 md:mt-28 lg:mt-28 mt-20 lg:ml-0 relative w-full px-20">
        <div>
          <p class="xl:text-6xl lg:text-3xl md:text-xl md:w-96 lg:w-[420px]
          xl:w-[900px] mx-auto text-center font-base w-96">
            Tekan sekali, bantuan akan datang. Panic Button Anda!
          </p>
          <article class="xl:text-xl xl:w-[750px] md:text-sm md:w-96
          text-center  text-mediumGrey mt-3 lg:text-base lg:w-[430px] mx-auto text-xs  w-80">
            Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
          </article>

          <div class="flex justify-center items-center mt-5 mx-auto">
            <button class="bg-vividRed rounded-full text-white xl:w-72 xl:h-14
            xl:text-lg md:text-sm lg:text-base lg:w-64 lg:h-12 md:w-52 md:h-8 text-xs w-44 h-9">
              <router-link to="/#about">Tentang Panic Button</router-link>
            </button>
            <span class="bg-vividRed xl:py-3 xl:px-5 rounded-full text-white ml-2 md:py-2 md:px-4 px-2 py-1">
              <router-link to="/#about"><Icon icon="formkit:arrowdown" width="16" /></router-link>
            </span>
          </div>

          <div class="mb-2 mt-2">
            <div class="flex justify-center items-center text-yellow-300">
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <p class="ml-1 font-medium xl:text-base text-black lg:text-sm text-xs">5.5</p>
            </div>
            <p class="text-center text-lightGray xl:mt-2 lg:mt-5 lg:text-sm md:text-xs md:mt-1 text-xs mt-1">
              Dipercaya oleh lebih dari 4.000+ Pembeli.</p>
            <p class="text-center text-xs text-lightGray mt-1">Dari 1.250+ ulasan</p>
          </div>

        <div class="hidden md:block">
          <ul class="flex items-center text-center justify-center text-vividRed font-medium gap-24
               xl:mt-28 xl:mb-36 lg:text-sm lg:mt-20 lg:mb-32 md:text-xs md:mt-5 text-xs">
            <li class="flex">
              <Icon icon="lets-icons:check-fill" width="25" class="mr-2" /> Alat Mudah digunakan
            </li>
            <li class="flex">
              <Icon icon="lets-icons:check-fill" width="25" class="mr-2" /> Apps For User Friendly
            </li>
            <li class="flex">
              <Icon icon="lets-icons:check-fill" width="25" class="mr-2" /> Memudahkan Pemesanan Alat
            </li>
          </ul>
        </div>
      </div>

      <div class="2xl:w-96 2xl:h-96 xl:w-80 md:right-0 md:w-64 md:-top-12 absolute xl:bottom-16 md:block
      2xl:-right-0 xl:-right-20 lg:w-64 lg:h-80 lg:bottom-6 lg:right-0 overflow-hidden w-64 right-0 -top-10 hidden">
        <img src="/assets_image/logo-blur-panic-button.png" alt="img" class="ml-20" />
      </div>
    </div>


  </section>
</template>

<style scoped>

</style>
