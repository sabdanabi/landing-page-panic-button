<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
  <section id="home" class="font-poppins container mx-auto">
    <div class="flex justify-center mt-28 relative w-full">
      <div>
        <div class="mb-5">
          <div class="flex justify-center items-center text-yellow-300">
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <p class="ml-1 font-medium xl:text-base text-black lg:text-sm">5.5</p>
          </div>
          <p class="text-center text-xs text-lightGray">Dari 1.250+ ulasan</p>
        </div>

        <div>
          <p class="xl:text-6xl lg:text-3xl lg:w-[420px] xl:w-[900px] mx-auto leading-[6rem] text-center font-base">
            Tekan sekali, bantuan akan datang. Panic Button Anda!
          </p>
          <article class="xl:text-xl xl:w-[750px]
          text-center  text-mediumGrey mt-3 lg:text-base lg:w-[430px] mx-auto">
            Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
          </article>

          <div class="flex justify-center items-center mt-5 mx-auto">
            <button class="bg-vividRed rounded-full text-white xl:w-72 xl:h-14 xl:text-lg lg:text-base lg:w-64 lg:h-12">
              <router-link to="/#about">Tentang Panic Button</router-link>
            </button>
            <span class="bg-vividRed xl:py-3 xl:px-5 rounded-full text-white ml-2 lg:py-2 lg:px-4">
              <Icon icon="formkit:arrowdown" width="16" />
            </span>
          </div>

          <p class="text-center mr-10 text-lightGray mt-5 lg:text-sm">Dipercaya oleh lebih dari 4.000+ Pembeli.</p>
        </div>
      </div>

      <div class="xl:w-96 xl:h-96 absolute xl:bottom-16 xl:right-0 lg:w-64 lg:h-80 lg:bottom-6 lg:right-0 overflow-hidden">
        <img src="/assets_image/logo-blur-panic-button.png" alt="img" class="ml-20" />
      </div>
    </div>

    <ul class="flex items-center text-center justify-center text-vividRed font-medium gap-24
     xl:mt-28 xl:mb-36 lg:text-sm lg:mt-20 lg:mb-32">
      <li class="flex">
        <Icon icon="lets-icons:check-fill" width="25" class="mr-2" /> Lorem ipsum dolor sit amet
      </li>
      <li class="flex">
        <Icon icon="lets-icons:check-fill" width="25" class="mr-2" /> Lorem ipsum dolor sit amet
      </li>
      <li class="flex">
        <Icon icon="lets-icons:check-fill" width="25" class="mr-2" /> Lorem ipsum dolor sit amet
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
