<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="container px-20 font-poppins py-24">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <p class="text-4xl">Testimoni dari pelanggan</p>
        <article class="mt-5 w-[500px] text-sm text-mediumGrey">
          Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
        </article>
      </div>
    </div>

    <Splide :options="{ type: 'loop', autoplay: true, interval: 3000, gap: '1rem', perPage: 3, arrows: false, pagination: false }" class="mt-10">
      <SplideSlide>
        <div class="p-10 bg-white rounded-lg shadow-md">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full w-12 h-12" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p>Kadis Peres</p>
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

      <SplideSlide>
        <div class="p-10 bg-white rounded-lg shadow-md">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full w-12 h-12" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p>Kadis Peres</p>
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

      <SplideSlide>
        <div class="p-10 bg-white rounded-lg shadow-md">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full w-12 h-12" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p>Kadis Peres</p>
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
    </Splide>
  </section>
</template>

<style scoped>
</style>
