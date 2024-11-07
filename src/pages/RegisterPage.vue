<script setup>
  import { ref, watch, getCurrentInstance } from 'vue'
  import {useAuthStore} from "@/stores/authStore.js";
  import { useRouter } from 'vue-router';
  import { ElLoading } from 'element-plus';

  const authStore = useAuthStore();
  const router = useRouter();


  const form = ref({
    name: '',
    email: '',
    phone: '',
  });

  const { proxy } = getCurrentInstance();
  const onRegister = async  () => {

    const loading = ElLoading.service({
      target: proxy.$refs.formContainer,
      lock: true,
      text: 'Loading...',
      background: 'rgba(255, 255, 255, 0.7)',
    });

    await authStore.register(form.value);

    loading.close();
  };

  watch(() => authStore.success, (newValue) => {
    if (newValue) {
      form.value = {
        name: '',
        email: '',
        phone: '',
      };
    }
  });

</script>

<template>
  <section ref="formContainer" class="flex items-center justify-center min-h-screen bg-gray-100 font-poppins">
    <div class="w-full flex justify-center max-w-md shadow-lg rounded-lg p-1">
      <div class="w-full max-w-md p-8 bg-gradient-to-b from-smallRed from-1% via-white via-50% rounded-lg">
        <div class="flex justify-center mb-6">
          <img src="/assets_image/logo-panic-button.png" alt="Logo" class="w-12 h-12" />
        </div>
        <h2 class="text-2xl font-semibold text-center text-gray-800">Hi Welcome!!!</h2>
        <p class="mt-2 text-sm text-center text-gray-600">Please enter your details to sign up</p>

        <form @submit.prevent="onRegister">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Nama</label>
            <input
                type="text"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lightGray"
                placeholder="Masukan nama"
                v-model="form.name"
                required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lightGray"
                placeholder="Masukan email"
                v-model="form.email"
                required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">No.Hp</label>
            <input
                type="tel"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lightGray"
                placeholder="Maukan No.Hp"
                v-model="form.phone"
                required
            />
          </div>

          <div class="flex items-center justify-between mb-4">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              <span class="ml-2 text-sm text-gray-600">Remember for 30 days</span>
            </label>
          </div>

          <button type="submit" :disabled="authStore.loading" class="w-full py-3 text-sm font-medium text-white bg-vividOrangeRed rounded-lg hover:bg-vividRed">
            Register
          </button>
        </form>

        <div v-if="authStore.loading">Registering...</div>

        <p class="mt-4 text-sm text-center text-gray-600">
          Already have an account? <router-link to="/" class="text-indigo-600 hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>