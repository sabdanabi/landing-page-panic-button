<script setup>
import { onMounted } from 'vue';
import {useProfileStore} from "@/stores/profileStore.js";
import {Icon} from "@iconify/vue";

const profileStore = useProfileStore();
onMounted(() => {
  profileStore.fetchUserProfile();
});
</script>

<template>
  <section class="font-poppins py-20 relative">

    <span class="bg-transparent border w-12 h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10 absolute
         3xl:w-20 3xl:h-20 text-lg md:h-10 md:w-10 flex items-center justify-center rounded-full ml-5">
           <a href="#"><Icon icon="ic:baseline-whatsapp" class="text-white lg:text-lg xl:text-2xl 3xl:text-5xl"/></a>
    </span>

    <div class="w-[800px] shadow-2xl rounded-lg p-10 mx-auto flex justify-between">

      <div v-if="profileStore.error">
        <p>Error: {{ profileStore.error }}</p>
      </div>

      <div v-else-if="profileStore.userProfile" class="mt-16">
        <div>
          <p class="font-bold text-mediumGrey">Username</p>
          <span class="border-b-2 w-20 pb-2">{{ profileStore.userProfile.name }}</span>
        </div>
        <div class="my-10">
          <p class="font-bold text-mediumGrey">EMAIL</p>
          <span class="border-b-2 w-20 pb-2">{{ profileStore.userProfile.email }}</span>
        </div>
        <div>
          <p class="font-bold text-mediumGrey">PHONE</p>
          <span class="border-b-2 w-20 pb-2">{{ profileStore.userProfile.phone }}</span>
        </div>
        <p class="border-b-2 w-20 pb-1 mt-7 mb-3 font-medium">Bantuan</p>
        <p class="border-b-2 w-40 pb-1 font-medium">Kebijakan Privasi</p>
      </div>

      <div v-else>
        <p>Loading...</p>
      </div>
<!--      <img v-if="profileStore.userProfile?.avatar" :src="profileStore.userProfile.avatar" alt="User Avatar" class="h-64"/>-->
    </div>
  </section>
</template>

<style scoped>
</style>
