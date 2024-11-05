<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <footer id="footer" class=" px-10 font-poppins py-16 ">
    <div class="col-span-2 md:col-span-1">
      <img src="/assets_image/logo-panic-button.png" alt="SOS Logo"
           class="xl:w-24 lg:w-20 mb-4 md:w-16 w-16 3xl:ml-16 3xl:w-32" />
    </div>

    <div class="block md:hidden">
      <p class="font-light text-xs w-64">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna
      </p>
      <div class="flex">
        <img src="/assets_image/qr.png" alt="qr" class="h-36">
        <div>
          <div class="xl:w-48 lg:w-44 3xl:w-64 3xl:mr-5 mt-4 mb-5">
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
          <div class="xl:w-48 lg:w-44 3xl:w-64">
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
      <div class="flex gap-6">
        <div>
          <p class="font-semibold">Service</p>
          <ul class="text-xs font-light text-mediumGrey">
            <li class="mt-2">Pesan alat Panic Button</li>
            <li class="my-2">Kemudahan akses pengguna</li>
            <li>Katalog Panic Button</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold">Help</p>
          <ul class="text-xs font-light text-mediumGrey">
            <li class="mt-2">Ketentuan Penggunaan</li>
            <li class="my-2">Kebijakan Privasi</li>
          </ul>
        </div>
      </div>
      <div class="mt-6">
        <p class="font-semibold">Hubungi Kami</p>
        <ul class="text-xs font-light text-mediumGrey mt-2">
          <li>
            <a class="flex gap-2 mb-1"><Icon icon="mdi:instagram" width="20"/>cancreative</a>
          </li>
          <li>
            <a class="flex gap-2"><Icon icon="ic:baseline-whatsapp" width="20"/>082281182118</a>
          </li>
        </ul>
      </div>
      <div class="flex space-x-4 text-mediumGrey mt-2">
        <a href="#"><Icon icon="ic:outline-email" width="25" height="25"/></a>
        <a href="#"><Icon icon="entypo-social:facebook-with-circle" width="25" height="25"/></a>
        <a href="#"><Icon icon="mdi:twitter" width="25" height="25"/></a>
      </div>
    </div>

    <div class="container hidden xl:block md:block">
      <div class="mx-auto flex md:gap-10 xl:gap-40 lg:gap-16 text-gray-700 3xl:mx-20">
        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl md:text-base">Services</h4>
          <ul class="xl:text-base lg:text-xs 3xl:text-3xl md:text-sm">
            <li class="lg:w-52 xl:w-60 3xl:w-[450px] md:w-52">
              <a href="#" class="hover:text-red-500">Pemesanan Alat Panic Button</a></li>
            <li class="my-3"><a href="#" class="hover:text-red-500">Kemudahan Akses Pengguna</a></li>
            <li><a href="#" class="hover:text-red-500">Katalog panic Button</a></li>
          </ul>
        </div>

        <div class="md:hidden lg:block">
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl md:text-base">Help</h4>
          <ul class="xl:text-base lg:text-xs w-28 md:text-sm 3xl:text-3xl">
            <li class="lg:w-36 xl:w-48 mb-3 3xl:w-96 md:w-44">
              <a href="#" class="hover:text-red-500">Ketentuan Penggunaan</a></li>
            <li class="xl:w-48 3xl:w-80 md:w-44"><a href="#" class="hover:text-red-500">Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div class="3xl:ml-44">
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl md:text-base">Contacts</h4>
          <ul class="xl:text-base lg:text-xs 3xl:text-3xl md:text-sm">
            <li class="flex items-center 3xl:w-[800px]">
              <span class="mr-2"><Icon icon="mynaui:location" class="text-2xl 3xl:text-5xl"/>
              </span>Jl. Sentyaki Raya No.7, Bulu Lor,
              Kec. Semarang Utara Kota Semarang, Jawa Tengah 50179
            </li>
            <li class="flex items-center my-3">
              <span class="mr-2"><Icon icon="material-symbols:call-outline" class="text-2xl 3xl:text-5xl"/></span>082281182118
            </li>
            <li class="flex items-center">
              <span class="mr-2"><Icon icon="ic:outline-email" class="text-2xl 3xl:text-5xl"/></span>hallo@can.co.id
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:hidden">
      <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl md:text-base">Help</h4>
      <ul class="xl:text-base lg:text-xs w-28 3xl:text-2xl md:text-sm">
        <li class="lg:w-36 xl:w-48 mb-3 3xl:w-72 md:w-44"><a href="#" class="hover:text-red-500">Ketentuan Penggunaan</a></li>
        <li class="xl:w-48 3xl:w-60 md:w-44"><a href="#" class="hover:text-red-500">Kebijakan Privasi</a></li>
      </ul>
    </div>

    <div class="">
<!--      <h4 class="font-bold mb-4 ml-5 xl:text-base lg:text-sm 3xl:text-4xl md:text-base">Social Media</h4>-->
      <div class="flex space-x-4 justify-center items-center mt-10">
         <span class="bg-vividOrangeRed w-12 h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10
         3xl:w-20 3xl:h-20 text-lg md:h-10 md:w-10 flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="ic:baseline-whatsapp" class="text-white lg:text-lg xl:text-2xl 3xl:text-5xl"/></a>
         </span>
        <span class="bg-vividOrangeRed md:h-10 md:w-10 w-12 h-12 lg:w-8 lg:h-8 text-lg xl:w-10 xl:h-10 3xl:w-20 3xl:h-20
            flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="entypo-social:facebook-with-circle" class="text-white lg:text-lg xl:text-2xl 3xl:text-5xl"/></a>
         </span>
        <span class="bg-vividOrangeRed md:h-10 md:w-10 w-12 h-12 lg:w-8 lg:h-8 text-lg xl:w-10 xl:h-10 3xl:w-20 3xl:h-20
            flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="mdi:instagram" class="text-white lg:text-lg xl:text-2xl 3xl:text-5xl"/></a>
         </span>
      </div>
    </div>

    <p class="text-xs flex justify-center items-center mt-3 3xl:text-xl ">&copy; 2024 Can Creative. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #ffffff;
}
</style>
