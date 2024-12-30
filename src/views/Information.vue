<script setup>

import {useInformationStore} from "@/stores/informasiStore.js";
import {onMounted} from "vue";

const informationStore = useInformationStore();
const { fetchInformations, informations, loading, error } = informationStore;

onMounted(() => {
  fetchInformations();
});

</script>

<template>
  <section id="products" class="xl:px-20 lg:px-20 font-poppins md:py-24 xl:py-24 lg:py-24 md:px-12 px-10">
    <p class="md:text-4xl xl:text-4xl 3xl:text-6xl lg:text-4xl text-xl font-medium 3xl:mt-10">Informasi</p>
    <p v-if="loading" class="text-gray-500">Memuat data...</p>

    <p v-if="error" class="text-red-500">{{ error }}</p>

    <div  v-if="!loading && !error">
      <div class="flex mt-10" v-for="info in informations" :key="info.id">
        <img :src="`https://api-panic-button.idaman.co.id/${info.thumbnail}`" alt="" class="w-52 h-52">
        <article class="ml-10">
          <h2 class="font-semibold text-xl mb-5">{{ info.title }}</h2>
          <p class="text-base" v-html="info.content"></p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>