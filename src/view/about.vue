<script setup></script>
<template>
  <div class="font-sans text-gray-800 main">

    <!-- Meet Our Team Section -->
    <section class="py-12 pb-6">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Who We Are</h2>
        <p class="mb-8 text-gray-600">
          We are a team of passionate developers and designers to building great products. Our mission is to create user-friendly applications that improve people's lives and businesses.
        </p>
      </div>
    </section>

    <!-- Placeholder Image -->
    <div class="bg-blue-100 pt-8 pb-40">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold mb-6 text-blue-500">Our vision</h3>
          <p class="text-center text-gray-600 mb-32">We beleive in the power of technology to bring positive change. Our vision is to build scalable and innovative solutions that empower individuals and organizations to thrive in an ever-changing world.</p>
        <div class="w-full max-w-4xl mx-auto h-48 flex items-center justify-center">
          <span class="text-gray-600 shadow-lg rounded-md"><img src="https://placehold.co/800x400"></span>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <section class="py-12">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-center mb-8">Features</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="text-center p-6  rounded shadow bg-blue-100">
            <h3 class="font-bold">Feature 1</h3>
            <p class="text-gray-600 mt-2">Detailed description of feature 1.</p>
          </div>
          <div class="text-center p-6  rounded shadow bg-blue-100">
            <h3 class="font-bold">Feature 2</h3>
            <p class="text-gray-600 mt-2">Detailed description of feature 2.</p>
          </div>
          <div class="text-center p-6  rounded shadow bg-blue-100">
            <h3 class="font-bold">Feature 3</h3>
            <p class="text-gray-600 mt-2">Detailed description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Get in Touch Section -->
    <section class="bg-blue-100 py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4 text-blue-500">Wants to work with us?</h2>
        <p class="text-gray-600 mb-6">Have questions or want to know more? Feel free to reach out to us.</p>
        <button class="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 75%;
  padding: 0 1rem;
}

</style>
