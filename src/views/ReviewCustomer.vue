<script setup>
import { SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Icon } from "@iconify/vue";
</script>

<template>
  <section id="review" class="container px-20 font-poppins pt-16">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <p class="xl:text-4xl lg:text-3xl md:text-2xl">Testimoni dari pelanggan</p>
        <article class="mt-5 lg:w-[500px] xl:w-[500px]
        xl:text-sm lg:text-xs text-mediumGrey md:mt-2 md:text-sm md:w-72 md:ml-3">
          Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
        </article>
      </div>
    </div>

    <div class="scroll-container mt-10">
      <SplideSlide>
        <div class="slide-content">
          <p class="xl:text-base lg:text-sm w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p class="xl:text-base lg:text-sm">Kadis Peres</p>
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
        <div class="slide-content">
          <p class="xl:text-base lg:text-sm w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p class="xl:text-base lg:text-sm">Kadis Peres</p>
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
        <div class="slide-content">
          <p class="xl:text-base lg:text-sm w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p class="xl:text-base lg:text-sm">Kadis Peres</p>
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
        <div class="slide-content">
          <p class="xl:text-base lg:text-sm w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p class="xl:text-base lg:text-sm">Kadis Peres</p>
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
        <div class="slide-content">
          <p class="xl:text-base lg:text-sm w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <div class="flex items-center mt-3">
            <img class="rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10" src="/assets_image/assest_image_customer/customer-photo-profile.png" alt="img">
            <div class="ml-4">
              <p class="xl:text-base lg:text-sm">Kadis Peres</p>
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
