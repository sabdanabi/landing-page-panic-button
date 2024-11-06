<script setup>

</script>

<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full flex justify-center max-w-md shadow-lg rounded-lg p-1">
      <div class="w-full max-w-md p-8 bg-gradient-to-b from-smallRed from-1% via-white via-50% rounded-lg">
        <div class="flex justify-center mb-6">
          <img src="/assets_image/logo-panic-button.png" alt="Logo" class="w-12 h-12" />
        </div>
        <h2 class="text-2xl font-semibold text-center text-gray-800">Hi Welcome!!!</h2>
        <p class="mt-2 text-sm text-center text-gray-600">Please enter your details to sign up</p>

        <form @submit.prevent="handleSubmit">

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lightGray"
                placeholder="Masukan email"
                v-model="email"
                required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">No.Hp</label>
            <input
                type="email"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lightGray"
                placeholder="Maukan No.Hp"
                v-model="email"
                required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lightGray"
                placeholder="••••••••"
                v-model="password"
                required
            />
          </div>

          <div class="flex items-center justify-between mb-4">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              <span class="ml-2 text-sm text-gray-600">Remember for 30 days</span>
            </label>
          </div>

          <button type="submit" class="w-full py-3 text-sm font-medium text-white bg-vividOrangeRed rounded-lg hover:bg-vividRed">
            Login
          </button>
        </form>

        <p class="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <a href="#" class="text-indigo-600 hover:underline">Create account</a>
        </p>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>