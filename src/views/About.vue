<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>
  <section id="about" class="container px-20 font-poppins py-24">
    <div class="container bg-white rounded-xl overflow-hidden flex drop-shadow-lg xl:h-96 justify-between">
      <div class="pl-20 pt-10">
        <p class="xl:text-4xl lg:text-3xl">About Panic Button</p>
        <article class="xl:w-[700px] lg:w-[450px] mt-4 xl:text-lg lg:text-base text-mediumGrey ">
          Aplikasi Tombol Panik adalah aplikasi yang dirancang untuk
          memfasilitasi pembelian dan pengelolaan alat Panic Button.
          Aplikasi ini memungkinkan pengguna, baik perorangan maupun perusahaan,
          untuk mencari, memilih, dan memesan berbagai jenis Panic Button sesuai kebutuhan.</article>
        <div class="flex gap-3 xl:mt-20 lg:mt-10 lg:mb-5">
          <div class="xl:w-48 lg:w-44">
            <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
            >
              <Icon icon="ion:logo-google-playstore" width="30"/>
              <div class="text-left ml-3">
                <p class="text-xs text-gray-600 leading-none">GET IT ON</p>
                <p class=" xl:text-lg lg:text-base font-semibold text-gray-800 leading-none">Google Play</p>
              </div>
            </a>
          </div>
          <div class="xl:w-48 lg:w-44">
            <a
                href="https://www.apple.com/id/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
            >
              <Icon icon="ic:baseline-apple" width="30"/>
              <div class="text-left ml-3">
                <p class="text-xs text-gray-600 leading-none">GET IT ON</p>
                <p class="xl:text-lg lg:text-base font-semibold text-gray-800 leading-none">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="flex">
        <img src="/assets_image/image-about.png" alt="img" class=" xl:w-[370px] xl:h-auto lg:h-80 lg:mt-5">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>