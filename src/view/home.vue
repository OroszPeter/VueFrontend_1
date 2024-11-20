<script setup></script>
<template>
  <div class="font-sans text-gray-800 main">

    <!-- Meet Our Team Section -->
    <section class="py-12 pb-6">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-blue-500">Meet Our Team</h2>
        <p class="mb-8 text-gray-600">
          Our team is a mix of talented individuals who bring unique skills and perspectives to the table.
        </p>
        <div class="flex justify-center gap-12">
          <!-- Team Member -->
          <div class="text-center">
            <img src="https://placehold.co/150x150" class="w-36 h-36 bg-gray-300 rounded-full mb-4">
            <h3 class="font-bold">John Doe</h3>
            <p class="text-gray-500">Lead Developer</p>
          </div>
          <!-- Team Member -->
          <div class="text-center">
            <img src="https://placehold.co/150x150" class="w-36 h-36 bg-gray-300 rounded-full mb-4">
            <h3 class="font-bold">Jane Smith</h3>
            <p class="text-gray-500">UI/UX Designer</p>
          </div>
          <!-- Team Member -->
          <div class="text-center">
            <img src="https://placehold.co/150x150" class="w-36 h-36 bg-gray-300 rounded-full mb-4">
            <h3 class="font-bold">Samuel Lee</h3>
            <p class="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Placeholder Image -->
    <div class="bg-gray-200 pt-32 pb-12">
      <div class="container mx-auto">
        <div class="w-full max-w-4xl mx-auto h-48 flex items-center justify-center">
          <span class="text-gray-300 shadow-lg rounded-md"><img src="https://placehold.co/800x400"></span>
        </div>
        <p class="text-center text-gray-600 mt-32">A beautiful placeholder image to showcase design.</p>
      </div>
    </div>

    <!-- Get in Touch Section -->
    <section class="bg-blue-100 py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4 text-blue-500">Get in Touch</h2>
        <p class="text-gray-600 mb-6">Have questions or want to know more? Feel free to reach out to us.</p>
        <button class="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </section>

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
  </div>
</template>

<style scoped>
.container {
  max-width: 75%;
  padding: 0 1rem;
}

</style>
