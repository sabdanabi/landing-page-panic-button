<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <footer id="footer" class="lg:px-20 md:px-20 xl:px-20 px-10 font-poppins py-16 ">
    <div class="col-span-2 md:col-span-1">
      <img src="/assets_image/logo-panic-button.png" alt="SOS Logo" class="xl:w-24 lg:w-20 mb-4 md:w-16 w-16 3xl:ml-16 3xl:w-32" />
    </div>

    <div class="block lg:hidden">
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
          <p class="font-semibold">Tentang</p>
          <ul class="text-xs font-light text-mediumGrey">
            <li class="mt-2">Lorem ipsum dolor sit</li>
            <li class="my-2">Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
            <li class="mt-2">Lorem ipsum dolor sit</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold">Kebijakan</p>
          <ul class="text-xs font-light text-mediumGrey">
            <li class="mt-2">Lorem ipsum dolor sit</li>
            <li class="my-2">Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
            <li class="mt-2">Lorem ipsum dolor sit</li>
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

<!--    <div class="lg:hidden md:block xl:hidden">-->
<!--      <div class="">-->
<!--        <div class="flex space-x-4 justify-center items-center ">-->
<!--         <span class="bg-vividOrangeRed w-10 h-10 text-lg flex items-center justify-center rounded-full ml-5">-->
<!--           <a href="#"><Icon icon="ic:baseline-whatsapp" width="20" class="text-white"/></a>-->
<!--         </span>-->
<!--          <span class="bg-vividOrangeRed w-10 h-10 text-lg flex items-center justify-center rounded-full ml-5">-->
<!--           <a href="#"><Icon icon="entypo-social:facebook-with-circle" width="20" class="text-white"/></a>-->
<!--         </span>-->
<!--          <span class="bg-vividOrangeRed w-10 h-10 text-lg flex items-center justify-center rounded-full ml-5">-->
<!--           <a href="#"><Icon icon="mdi:instagram" width="20" class="text-white"/></a>-->
<!--         </span>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="space-y-4 text-gray-400 mt-4">-->
<!--        <div class="flex space-x-4 justify-center items-center">-->
<!--          <div class="flex flex-wrap items-center gap-4">-->
<!--            <el-dropdown placement="top-start">-->
<!--              <el-button> Service </el-button>-->
<!--              <template #dropdown>-->
<!--                <el-dropdown-menu>-->
<!--                  <el-dropdown-item>Pemesanan Alat Panic Button</el-dropdown-item>-->
<!--                  <el-dropdown-item>Kemudahan Akses Pengguna</el-dropdown-item>-->
<!--                  <el-dropdown-item>Katalog panic Button</el-dropdown-item>-->
<!--                </el-dropdown-menu>-->
<!--              </template>-->
<!--            </el-dropdown>-->
<!--          </div>-->
<!--          <div class="border-l border-gray-400 h-4"></div>-->
<!--          <div class="flex flex-wrap items-center gap-4">-->
<!--            <el-dropdown placement="top-start">-->
<!--              <el-button> Help </el-button>-->
<!--              <template #dropdown>-->
<!--                <el-dropdown-menu>-->
<!--                  <el-dropdown-item>Privacy Policy</el-dropdown-item>-->
<!--                  <el-dropdown-item>Terms of Use</el-dropdown-item>-->
<!--                </el-dropdown-menu>-->
<!--              </template>-->
<!--            </el-dropdown>-->
<!--          </div>-->
<!--          <div class="border-l border-gray-400 h-4"></div>-->
<!--          <div class="flex flex-wrap items-center gap-4">-->
<!--            <el-dropdown placement="top-start">-->
<!--              <el-button> Contact </el-button>-->
<!--              <template #dropdown>-->
<!--                <el-dropdown-menu>-->
<!--                  <el-dropdown-item>+39 346 368 5708</el-dropdown-item>-->
<!--                  <el-dropdown-item>can@gmail.com</el-dropdown-item>-->
<!--                  <el-dropdown-item>Jl. Sentyaki Raya No.7</el-dropdown-item>-->
<!--                </el-dropdown-menu>-->
<!--              </template>-->
<!--            </el-dropdown>-->
<!--          </div>-->
<!--          <div class="border-l border-gray-400 h-4"></div>-->
<!--          <span>Home</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="container hidden xl:block lg:block">
      <div class="mx-auto flex xl:gap-28 lg:gap-10 text-gray-700 container 3xl:gap-64 3xl:mx-20">
        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl">Services</h4>
          <ul class="xl:text-base lg:text-xs 3xl:text-2xl">
            <li class="lg:w-52"><a href="#" class="hover:text-red-500">Pemesanan Alat Panic Button</a></li>
            <li class="my-3"><a href="#" class="hover:text-red-500">Kemudahan Akses Pengguna</a></li>
            <li><a href="#" class="hover:text-red-500">Katalog panic Button</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl">Home</h4>
          <ul class="xl:text-base lg:text-xs 3xl:text-xl">
            <li><a href="#" class="hover:text-red-500">Home</a></li>
            <li><a href="#" class="hover:text-red-500 mt-2">About</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl">Help</h4>
          <ul class="xl:text-base lg:text-xs w-28 3xl:text-xl">
            <li><a href="#" class="hover:text-red-500">Terms of Use</a></li>
            <li><a href="#" class="hover:text-red-500">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 xl:text-base lg:text-sm 3xl:text-4xl">Contacts</h4>
          <ul class="xl:text-base lg:text-xs 3xl:text-xl">
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
          <h4 class="font-bold mb-4 ml-5 xl:text-base lg:text-sm 3xl:text-4xl">Social Media</h4>
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
