<script setup>
import { onMounted, ref  } from 'vue';
import {useProfileStore, useUpdateProfileStore} from "@/stores/profileStore.js";
import {useLogoutStore} from "@/stores/authStore.js";

const profileStore = useProfileStore();
const logoutStore = useLogoutStore();
const updateProfileStore = useUpdateProfileStore();
const showModal = ref(false);

const handleLogout = async () => {
  await logoutStore.logout()
};

onMounted(() => {
  profileStore.fetchUserProfile();
});

const profile = ref({
  name: profileStore.userProfile?.name || "",
  phone: profileStore.userProfile?.phone || "",
  email: profileStore.userProfile?.email || "",
  avatar: null,
});

const openEditModal = () => {
  profile.value = { ...profileStore.userProfile };
  showModal.value = true;
};

const updateProfile = async () => {
  await updateProfileStore.updateUserProfile(profile.value);
  showModal.value = false;
  await profileStore.fetchUserProfile();
};

</script>

<template>
  <section class="font-poppins py-20">
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
        <p class="border-b-2 w-20 pb-1 mt-7 mb-3 font-medium">
          <button >Bantuan</button>
        </p>
        <p class="border-b-2 w-40 pb-1 font-medium">Kebijakan Privasi</p>

        <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="openEditModal">
          Edit Profil
        </button>

        <button @click="handleLogout" class="bg-red-600 text-white mt-3 px-4 py-2 rounded-lg hover:bg-red-500">
          Logout
        </button>
      </div>

      <div v-else>
        <p>Loading...</p>
      </div>

      <!-- Gambar profil -->
      <!--      <img v-if="profileStore.userProfile?.avatar" :src="profileStore.userProfile.avatar" alt="User Avatar" class="h-64"/>-->

      <div
          v-if="showModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="bg-white p-6 rounded w-1/3">
          <h2 class="text-lg font-semibold mb-4">Edit Profil</h2>
          <form @submit.prevent="updateProfile">
            <div class="mb-4">
              <label class="block text-sm font-medium mb-1">Nama:</label>
              <input
                  type="text"
                  v-model="profile.name"
                  class="w-full border px-3 py-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium mb-1">Nomor Telepon:</label>
              <input
                  type="text"
                  v-model="profile.phone"
                  class="w-full border px-3 py-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium mb-1">Email:</label>
              <input
                  type="email"
                  v-model="profile.email"
                  class="w-full border px-3 py-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium mb-1">Avatar:</label>
              <input
                  type="file"
                  @change="(e) => (profile.avatar = e.target.files[0])"
                  class="w-full"
              />
            </div>
            <div class="flex justify-end">
              <button
                  type="button"
                  class="px-4 py-2 bg-gray-300 rounded mr-2"
                  @click="showModal = false"
              >
                Batal
              </button>
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
