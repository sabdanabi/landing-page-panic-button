<script setup>
import {Icon} from "@iconify/vue";

</script>

<template>
  <footer id="footer" class="lg:px-20 md:px-20 xl:px-20 px-10 font-poppins py-16 ">
    <div class="col-span-2 md:col-span-1">
      <img src="/assets_image/logo-panic-button.png" alt="SOS Logo" class="xl:w-24 lg:w-20 mb-4 md:w-16 w-16" />
    </div>

    <div class="lg:hidden md:block xl:hidden">

      <div class="">
        <div class="flex space-x-4 justify-center items-center ">
         <span class="bg-vividOrangeRed w-10 h-10 text-lg flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="ic:baseline-whatsapp" width="20" class="text-white"/></a>
         </span>
          <span class="bg-vividOrangeRed w-10 h-10 text-lg flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="entypo-social:facebook-with-circle" width="20" class="text-white"/></a>
         </span>
          <span class="bg-vividOrangeRed w-10 h-10 text-lg flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="mdi:instagram" width="20" class="text-white"/></a>
         </span>
        </div>
      </div>

      <div class="space-y-4 text-gray-400 mt-4">
        <div class="flex space-x-4 justify-center items-center">
          <div class="flex flex-wrap items-center gap-4">
            <el-dropdown placement="top-start">
              <el-button> Service </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Pemesanan Alat Panic Button</el-dropdown-item>
                  <el-dropdown-item>Kemudahan Akses Pengguna</el-dropdown-item>
                  <el-dropdown-item>Katalog panic Button</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="border-l border-gray-400 h-4"></div>
          <div class="flex flex-wrap items-center gap-4">
            <el-dropdown placement="top-start">
              <el-button> Help </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Privacy Policy</el-dropdown-item>
                  <el-dropdown-item>Terms of Use</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="border-l border-gray-400 h-4"></div>
          <div class="flex flex-wrap items-center gap-4">
            <el-dropdown placement="top-start">
              <el-button> Contact </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>+39 346 368 5708</el-dropdown-item>
                  <el-dropdown-item>can@gmail.com</el-dropdown-item>
                  <el-dropdown-item>Jl. Sentyaki Raya No.7</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="border-l border-gray-400 h-4"></div>
          <span>Home</span>
        </div>
      </div>
    </div>

    <div class="container hidden xl:block lg:block ">
      <div class="mx-auto flex xl:gap-28 lg:gap-10 text-gray-700 container">
        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm">Services</h4>
          <ul class="xl:text-base lg:text-xs">
            <li class="lg:w-52"><a href="#" class="hover:text-red-500">Pemesanan Alat Panic Button</a></li>
            <li class="my-3"><a href="#" class="hover:text-red-500">Kemudahan Akses Pengguna</a></li>
            <li><a href="#" class="hover:text-red-500">Katalog panic Button</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm">Home</h4>
          <ul class="xl:text-base lg:text-xs">
            <li><a href="#" class="hover:text-red-500">Home</a></li>
            <li><a href="#" class="hover:text-red-500 mt-2">About</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm">Help</h4>
          <ul class="xl:text-base lg:text-xs w-28">
            <li><a href="#" class="hover:text-red-500">Terms of Use</a></li>
            <li><a href="#" class="hover:text-red-500">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm">Contacts</h4>
          <ul class="xl:text-base lg:text-xs">
            <li class="flex items-center">
              <span class="mr-2">📍</span>Jl. Sentyaki Raya No.7
            </li>
            <li class="flex items-center my-2">
              <span class="mr-2">📞</span>+39 346 368 5708
            </li>
            <li class="flex items-center">
              <span class="mr-2">✉️</span>can@gmail.com
            </li>
          </ul>
        </div>

        <div class="">
          <h4 class="font-bold mb-4 ml-5 xl:text-base lg:text-sm">Social Media</h4>
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
    </div>

    <p class="text-xs flex justify-center items-center mt-6 ">&copy; 2024 Can Creative. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #ffffff;
}
</style>
