<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div data-aos="zoom-out">
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Brand new
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="ea469ae8-e6ec-4aca-8875-fc402da4d16e" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)" width="52" height="24" />
          </svg>
          <span class="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
    <div class="grid gap-8 row-gap-10 lg:grid-cols-2">
      <div
        v-for="(item, index) in featuresItems"
        :key="index"
        class="max-w-md sm:mx-auto sm:text-center"
      >
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <img :src="item.image" :alt="item.name">
        </div>
        <h6 class="mb-3 text-xl font-bold leading-5">
          {{ item.name }}
        </h6>
        <p class="mb-3 text-sm text-gray-900">
          {{ item.text }}
        </p>
        <NuxtLink :to="item.path" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
          Leer más
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      featuresItems: [
        { name: 'Dermatologia Clínica Pediátrica', path: '/', image: '', text: 'Diagnostico y tratamiento integral de enfermedades dermatológicas pediátricas' },
        { name: 'Dermatologia Clínica Adultos', path: '/', image: '', text: 'Diagnóstico y tratamiento integral de enfermedades dermatológicas en adultos' },
        { name: 'Dermatología Estética', path: '/', image: '', text: 'Tratamientos avanzados y eficaces (tu piel en manos de expertos)' },
        { name: 'Toma de biopsias y procedimientos menores', path: '/', image: '', text: '' }
      ]
    }
  }
}
</script>
