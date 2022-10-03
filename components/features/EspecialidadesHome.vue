<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 sm:mb-4">
          The quick, brown fox<br class="hidden md:block" />
          jumps over a lazy dog
        </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
      </h2>
      <p class="text-gray-700 lg:text-sm lg:max-w-md">
        "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut perspiciatis unde omnis iste."
      </p>
    </div>
    <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      <a  v-for="(item, index) in featuresItems"
        :key="index"
        :href="item.path"
         aria-label="View Item">
        <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" :src="item.image" alt="" />
          <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
            <!-- <p class="text-sm font-medium tracking-wide text-white">
               {{ item.text }}
            </p> -->
            <p class="mb-4 text-lg font-bold text-gray-100">{{ item.name }}</p>
            <p class="text-sm tracking-wide text-gray-300">
              {{ item.text }}
            </p>
          </div>
        </div>
      </a>

    </div>
    <div class="text-center">
      <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
        See more
        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      featuresItems: [
        { name: 'Dermatologia Clínica Pediátrica', path: '/', image: 'https://media.istockphoto.com/photos/caucasian-mother-applying-healthy-skin-care-moisturizing-cream-on-picture-id1302810320?s=612x612', text: 'Diagnostico y tratamiento integral de enfermedades dermatológicas pediátricas' },
        { name: 'Dermatologia Clínica Adultos', path: '/', image: 'https://media.istockphoto.com/photos/attractive-dermatologist-in-white-coat-examining-skin-of-patient-in-picture-id1190138450?s=612x612', text: 'Diagnóstico y tratamiento integral de enfermedades dermatológicas en adultos' },
        { name: 'Dermatología Estética', path: '/', image: 'https://media.istockphoto.com/photos/dermapen-skin-needling-treatment-picture-id1271011637?s=612x612', text: 'Tratamientos avanzados y eficaces (tu piel en manos de expertos)' },
        { name: 'Toma de biopsias y procedimientos menores', path: '/', image: 'https://cdn.pixabay.com/photo/2021/09/28/15/55/laser-treatment-6664875_1280.jpg', text: 'Para llegar a diagnosticos acertados y resolver definitivamente algunas patologias. ' }
      ]
    }
  }
}
</script>
