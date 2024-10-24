<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section id="home" class="font-poppins">
    <div class="flex justify-center mt-28 relative">
      <div>
        <div class="mb-5">
          <div class="flex justify-center items-center text-yellow-300">
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <p class="ml-1 font-medium text-black">5.5</p>
          </div>
          <p class="text-center text-xs text-lightGray">Dari 1.250+ ulasan</p>
        </div>

        <div>
          <p class="text-6xl w-[900px] leading-[6rem] text-center font-base">
            Tekan sekali, bantuan akan datang. Panic Button Anda!
          </p>
          <article class="text-xl w-[750px] text-center ml-16 text-mediumGrey mt-3">
            Aplikasi Tombol Panik adalah sebuah inovasi untuk meningkatkan respons terhadap situasi darurat dan kejahatan.
          </article>

          <div class="flex justify-center items-center mt-5">
            <button class="bg-vividRed rounded-full text-white w-72 h-14 text-lg">
              Tentang Panic Button
            </button>
            <span class="bg-vividRed py-3 px-5 rounded-full text-white ml-2">
              <Icon icon="formkit:arrowdown" width="16" />
            </span>
          </div>

          <p class="text-center mr-10 text-lightGray mt-5">Dipercaya oleh lebih dari 4.000+ Pembeli.</p>
        </div>
      </div>

      <div class="w-96 h-96 absolute bottom-40 right-0 overflow-hidden">
        <img src="/assets_image/logo-blur-panic-button.png" alt="img" class="ml-20" />
      </div>
    </div>

    <ul class="flex items-center text-center justify-center text-vividRed font-medium gap-24 mt-24">
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
/* Add any specific styles here if needed */
</style>
