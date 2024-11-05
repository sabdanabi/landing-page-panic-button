<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>
  <section id="about" class="md:px-20 px-10 font-poppins py-24">
    <div class=" bg-white rounded-xl overflow-hidden flex drop-shadow-lg xl:h-96 lg:h-96 3xl:h-[700px] justify-between">
      <div class="lg:pl-20 md:pt-10 md:pl-14 p-3 3xl:p-20 3xl:mt-14">
        <p class="xl:text-4xl lg:text-3xl md:text-xl font-medium text-base 3xl:text-7xl xs:text-xl">About Panic Button</p>
        <article class="xl:w-[700px] lg:w-[450px] md:w-[350px] xl:text-lg
        lg:text-base md:text-xs text-mediumGrey text-xs 3xl:text-3xl 3xl:w-[900px] xs:text-xs xs:w-60">
          Aplikasi Tombol Panik adalah aplikasi yang dirancang untuk
          memfasilitasi pembelian dan pengelolaan alat Panic Button.
          Aplikasi ini memungkinkan pengguna, baik perorangan maupun perusahaan,
          untuk mencari, memilih, dan memesan berbagai jenis Panic Button sesuai kebutuhan.</article>
        <div class="">
          <div class=" md:flex gap-3 xl:mt-20 lg:mt-10 lg:mb-5 3xl:mt-28">

            <div class="xl:w-48 lg:w-44 3xl:w-64 3xl:mr-5 xs:w-40">
              <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
              >
                <Icon icon="ion:logo-google-playstore" class="3xl:text-5xl 2xl:text-2xl"/>
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-600 leading-none 3xl:text-base">GET IT ON</p>
                  <p class=" xl:text-lg lg:text-base font-semibold text-gray-800 leading-none 3xl:text-2xl">Google Play</p>
                </div>
              </a>
            </div>

            <div class="xl:w-48 lg:w-44 3xl:w-64 xs:w-40">
              <a
                  href="https://www.apple.com/id/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
              >
                <Icon icon="ic:baseline-apple" class="3xl:text-5xl 2xl:text-2xl"/>
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-600 leading-none 3xl:text-base">GET IT ON</p>
                  <p class="xl:text-lg lg:text-base font-semibold text-gray-800 leading-none 3xl:text-2xl">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <img src="/assets_image/image-about.png" alt="img"
             class=" xl:w-[370px] md:w-44 xl:h-auto 3xl:w-[700px] lg:w-72 lg:mt-5 hidden md:block">
      </div>

      <div class="block md:hidden">
        <img src="/assets_image/mockup_apps/mockup-apps-2.png" alt="img"
             class=" object-cover h-36 mt-10 mr-32">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>