<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
  <section id="home" class="font-poppins container mx-auto h-screen">
    <div class="flex justify-center items-center 3xl:py-72 md:py-40 xs:py-48 lg:py-44 lg:ml-0 relative w-full px-20">
        <div>
          <p class="xl:text-6xl lg:text-5xl md:text-3xl md:w-[500px] lg:w-[820px]
          xl:w-[900px] mx-auto text-center font-base w-96 3xl:text-8xl 3xl:w-[1500px] xs:text-lg">
            Tekan sekali, bantuan akan datang. Panic Button Anda!
          </p>
          <article class="xl:text-xl xl:w-[750px] md:text-sm md:w-96
          text-center  text-mediumGrey mt-3 lg:text-base lg:w-[530px]
          mx-auto text-xs w-80 3xl:text-4xl 3xl:w-[1200px] 3xl:my-6 z-10">
            Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
          </article>

          <div class="flex justify-center items-center mt-5 mx-auto">
            <button class="bg-vividRed rounded-full text-white xl:w-72 xl:h-14
            xl:text-lg md:text-sm lg:text-base lg:w-64 lg:h-12 md:w-52 md:h-8 3xl:w-96 3xl:h-16 text-xs w-44 h-9 3xl:text-xl ">
              <router-link to="/#about">Tentang Panic Button</router-link>
            </button>
            <span class="bg-vividRed xl:py-3 xl:px-5 rounded-full text-white ml-2 md:py-2 md:px-4 px-2 py-1">
              <router-link to="/#about"><Icon icon="formkit:arrowdown" width="16" /></router-link>
            </span>
          </div>

          <div class="m-3 ">
            <div class="flex justify-center items-center text-yellow-300 3xl:text-3xl">
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <p class="ml-1 font-medium xl:text-base text-black lg:text-sm text-xs 3xl:text-xl">5.5</p>
            </div>
            <p class="text-center text-lightGray xl:mt-2
            lg:text-sm md:text-xs text-xs 3xl:text-xl my-2">
              Dipercaya oleh lebih dari 4.000+ Pembeli.</p>
            <p class="text-center text-xs text-lightGray mt-1 3xl:text-xl">Dari 1.250+ ulasan</p>
          </div>

          <div class="mt-16 lg:mt-20 3xl:mt-56">
            <ul class="flex items-center justify-center text-center text-vividRed font-medium gap-10
               lg:text-sm md:text-xs text-xs 3xl:text-2xl 3xl:gap-60 2xl:gap-40">
              <li class="flex 3xl:text-3xl text-center items-center justify-center">
                <Icon icon="lets-icons:check-fill" class="mr-2 3xl:text-5xl text-xl" /> Alat Mudah digunakan
              </li>
              <li class="flex 3xl:text-3xl text-center items-center justify-center">
                <Icon icon="lets-icons:check-fill" class="mr-2 3xl:text-5xl text-xl" /> Apps User Friendly
              </li>
              <li class="flex 3xl:text-3xl text-center items-center justify-center">
                <Icon icon="lets-icons:check-fill" class="mr-2 3xl:text-5xl text-xl" /> Memudahkan Pemesanan Alat
              </li>
            </ul>
          </div>
      </div>
<!--      <div class="xl:-right-14 3xl:w-[530px] 2xl:w-[430px] 2xl:right-10 md:w-96 xl:w-[400px]-->
<!--      md:top-20 md:right-6 absolute md:pl-40 xl:pl-28 3xl:pl-0 overflow-hidden w-64">-->
<!--        <img src="/assets_image/logo-blur-panic-button.png" alt="img" class="md:w-36 3xl:w-[490px] xl:w-48 2xl:w-60 ml-20 object-cover" />-->
<!--      </div>-->
    </div>
  </section>
</template>

<style scoped>

</style>
