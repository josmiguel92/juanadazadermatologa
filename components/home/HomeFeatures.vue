<template>
  <div class="py-16 w-full md:px-24 lg:px-20 lg:py-20 bg-gradient-to-b from-primary to-accent">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="903f4a9e-7ac3-441c-9613-04c15fcc0a14" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)" width="52" height="24"></rect>
          </svg>
          <span class="relative text-white">Todo</span>
        </span>
        lo que tienes que saber acerca de
      </h2>
      <p class="text-base text-white md:text-lg">
        Estamos para servirte con amor.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-5 row-gap-6 mb-2 sm:grid-cols-3 lg:grid-cols-6">

      <div class="text-center" v-for="(item, index) in items" :key="index">
        <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full sm:w-24 sm:h-24">
          <img :src="item.image" class="w-20 h-20">
        </div>
        <h6 class="mb-2 leading-5 uppercase text-white">{{ item.name }}</h6>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { name: 'Cabello', image: '/icons/hair-w.png' },
        { name: 'Piel', image: '/icons/child-w.png' },
        { name: 'u​ñas', image: '/icons/hand-w.png' },
        { name: 'depilacion laser', image: '/icons/depilacion-w.png' },
        { name: 'procedimientos medicos', image: '/icons/medicine-w.png' },
        { name: 'procedimientos esteticos', image: '/icons/doctor-bag-white.png' }
      ]
    }
  }
}
</script>
