<template>
  <div class="transition duration-200 transform  hover:-translate-y-2 hover:shadow-2xl mx-3 my-5">
    <a :href="path" class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
      <img :src="image" loading="lazy" :alt="name" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200">

      <div class="w-full flex flex-col bg-white/50 backdrop-blur-sm text-center rounded-lg relative p-4">
        <span class="text-gray-600  font-bold">{{ name }}</span>
        <span class="text-gray-800 text-sm">{{ text }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    image: String,
    path: String
  }
}
</script>

<style>

</style>
