<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg p-6 w-96 h-52 flex flex-col">
    <div class="flex gap-2">
      <img :src="image" alt="User Profile" class="w-12 h-12 rounded-full mb-4" />
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ name }}</h3>
        <p class="text-sm text-gray-500 mb-3">{{ role }}</p>
      </div>
    </div>
    <p class="text-gray-700 text-sm mb-4">{{ review }}</p>
    <div class="flex space-x-1 text-yellow-500">
      <template v-for="star in 5" :key="star">
        <span v-if="star <= rating">★</span>
        <span v-else>☆</span>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>