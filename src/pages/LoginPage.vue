<script setup>
import {onMounted} from 'vue';
import {useLoginEmailStore} from "@/stores/authStore.js";
import {useRouter} from 'vue-router';
import {useToast} from 'vue-toastification';

const router = useRouter();
const authStore = useLoginEmailStore();
const toast = useToast();

const goToPageTest = () => {
  router.push('/sections');
};

onMounted(() => {
  authStore.handleRedirectResult().then(() => {
    if (authStore.user) {
      toast.success('Login successful!');
      goToPageTest();
    }
  });
});

</script>

<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100 font-poppins">
    <div class="w-full flex justify-center max-w-md shadow-lg rounded-lg p-1">
      <div class="w-full max-w-md p-8 bg-gradient-to-b from-smallRed from-1% via-white via-50% rounded-lg">
        <div class="flex justify-center mb-6">
          <img src="/assets_image/logo-panic-button.png" alt="Logo" class="w-12 h-12"/>
        </div>
        <h2 class="text-2xl font-semibold text-center text-gray-800">Welcome back</h2>
        <p class="mt-2 text-sm text-center text-gray-600">Please enter your details to sign in</p>

        <div class="flex justify-between mt-6 space-x-3">
          <button @click="authStore.loginWithEmail" :disabled="authStore.loading"
                  class="flex w-full justify-center gap-3 items-center py-2
          bg-white drop-shadow text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-300">
            <img src="/assets_image/google-icon.png" alt="google" class="h-5">
            <span>{{ authStore.loading ? 'Logging in...' : 'Sign in with Google' }}</span>
          </button>
        </div>

        <div class="flex items-center my-6">
          <span class="flex-grow border-t border-gray-300"></span>
          <span class="px-3 text-sm text-gray-500">or</span>
          <span class="flex-grow border-t border-gray-300"></span>
        </div>

        <form @submit.prevent="goToPageTest">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">No.Hp</label>
            <input
                type="email"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lightGray"
                placeholder="Masukan No.Hp"
                v-model="email"
            />
          </div>

          <div class="flex items-center justify-between mb-4">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
              <span class="ml-2 text-sm text-gray-600">Remember for 30 days</span>
            </label>
          </div>

          <button type="submit"
                  class="w-full py-3 text-sm font-medium text-white bg-vividOrangeRed rounded-lg hover:bg-vividRed">
            Login
          </button>
        </form>

        <p class="mt-4 text-sm text-center text-gray-600">
          Don't have an account?
          <router-link to="/register" class="text-indigo-600 hover:underline">Register</router-link>
        </p>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Style tambahan jika diperlukan */
</style>
