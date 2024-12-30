<script setup>
import {Icon} from "@iconify/vue";
import { ref, onMounted } from 'vue';


// function redirectToWhatsApp(contact) {
//   const whatsappURL = `https://wa.me/${contact}`;
//   window.open(whatsappURL, '_blank');
// }

</script>

<template>
  <div>
    <button
        class="bg-green-500 w-16 h-16 3xl:w-24 3xl:h-24 text-lg flex items-center justify-center
  rounded-t-full rounded-br-full ml-5 fixed bottom-16 right-5
   md:right-20 z-[9999]">


<!--      <a href="https://api.whatsapp.com/send?phone=6282138395289">-->
<!--        <Icon icon="ic:baseline-whatsapp" width="35" height="35" class="text-lgxt-white"/></a>-->
    </button>
  </div>
</template>
<style scoped>

</style>