<script setup>
  import { reactive } from 'vue';
  import ReviewCard from "@/components/ReviewCard.vue";

  const reviews = reactive([
    {
      name: "Dina Mardiana",
      role: "Pengunjung",
      review: "Ono Sant adalah tempat terbaik untuk bermain tenis. Lingkungannya asri dan sangat mendukung untuk berlatih!",
      rating: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Rina Setiawan",
      role: "Pelatih Tenis",
      review: "Pengalaman bermain tenis di Ono Sant sangat luar biasa! Fasilitasnya bersih dan terawat. Saya pasti akan kembali!",
      rating: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Andi Prasetyo",
      role: "Pemain Tenis",
      review: "Tempatnya nyaman dan harganya terjangkau. Pelayanan yang ramah membuat pengalaman bermain semakin menyenangkan!",
      rating: 4,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Andi Prasetyo",
      role: "Pemain Tenis",
      review: "Tempatnya nyaman dan harganya terjangkau. Pelayanan yang ramah membuat pengalaman bermain semakin menyenangkan!",
      rating: 4,
      image: "https://via.placeholder.com/50",
    },
  ]);
</script>

<template>
  <div class="p-4 bg-gray-100 min-h-screen ">
    <div class="flex gap-6 overflow-auto mb-5">
      <ReviewCard
          v-for="(review, index) in reviews"
          :key="index"
          :name="review.name"
          :role="review.role"
          :review="review.review"
          :rating="review.rating"
          :image="review.image"
      />
    </div>
<!--    <div class="flex overflow-auto gap-6">-->
<!--      <ReviewCard-->
<!--          v-for="(review, index) in reviews"-->
<!--          :key="index"-->
<!--          :name="review.name"-->
<!--          :role="review.role"-->
<!--          :review="review.review"-->
<!--          :rating="review.rating"-->
<!--          :image="review.image"-->
<!--      />-->
<!--    </div>-->
  </div>
</template>

<style scoped>

</style>