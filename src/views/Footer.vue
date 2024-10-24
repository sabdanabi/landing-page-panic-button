<script setup>
import {Icon} from "@iconify/vue";

</script>

<template>
  <footer id="footer" class="container px-20 font-poppins py-24 ">
    <div class="col-span-2 md:col-span-1">
      <img src="/assets_image/logo-panic-button.png" alt="SOS Logo" class="w-24 mb-4" />
    </div>
    <div class="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 text-gray-700">
      <div>
        <h4 class="font-bold mb-4">Services</h4>
        <ul>
          <li><a href="#" class="hover:text-red-500">Pemesanan Alat Panic Button</a></li>
          <li><a href="#" class="hover:text-red-500">Kemudahan Akses Pengguna</a></li>
          <li><a href="#" class="hover:text-red-500">Katalog panic Button</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold mb-4">Home</h4>
        <ul>
          <li><a href="#" class="hover:text-red-500">Home</a></li>
          <li><a href="#" class="hover:text-red-500">About Us</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold mb-4">Help</h4>
        <ul>
          <li><a href="#" class="hover:text-red-500">Terms of Use</a></li>
          <li><a href="#" class="hover:text-red-500">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold mb-4">Contacts</h4>
        <ul>
          <li class="flex items-center">
            <span class="mr-2">📍</span>Lorem ipsum dolor sit amet, conr
          </li>
          <li class="flex items-center">
            <span class="mr-2">📞</span>+39 346 368 5708
          </li>
          <li class="flex items-center">
            <span class="mr-2">✉️</span>italialinlimo@gmail.com
          </li>
        </ul>
      </div>

      <div class="">
        <h4 class="font-bold mb-4">Social Media</h4>
        <div class="flex space-x-4 ">
         <span class="bg-vividOrangeRed w-12 h-12 text-lg flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="ic:baseline-whatsapp" width="25" height="25" class="text-white"/></a>
         </span>
          <span class="bg-vividOrangeRed w-12 h-12 text-lg flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="entypo-social:facebook-with-circle" width="25" height="25" class="text-white"/></a>
         </span>
          <span class="bg-vividOrangeRed w-12 h-12 text-lg flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="mdi:instagram" width="25" height="25" class="text-white"/></a>
         </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #ffffff;
}
</style>
