<template>
  <div class="font-sans text-gray-800 main">
    <!-- Header (Navbar) -->
    <header class="bg-blue-600 text-white">
      <div class="container mx-auto flex justify-between items-center py-4">
        <h1 class="text-xl font-bold">Home</h1>
        <nav class="flex gap-6">
          <router-link to="/" class="hover:underline">Go to Home</router-link>
          <router-link to="/about" class="hover:underline">Go to About</router-link>
        </nav>
      </div>
    </header>

    <!-- Main view -->
    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-4">
      <div class="container mx-auto text-center">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { defineComponent } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.container {
  max-width: 75%;
  padding: 0 1rem;
}
.main{
  width: 98.75vw;
}
</style>
