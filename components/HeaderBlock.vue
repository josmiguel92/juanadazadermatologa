<template>
  <div class="mb-16">
    <HomeSlider />

    <div class="relative px-4 sm:px-0">
      <div class="absolute inset-0 bg-gray-100 h-1/2" />
      <div class="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
        <div class="inline-block p-8 text-center">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            Consejo del dia
          </p>
        </div>
        <div class="inline-block p-8 text-center">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            Sabías que...
          </p>
        </div>
        <div class="inline-block p-8 text-center">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            Frases Motivacionales
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import TInput from 'vue-tailwind/dist/t-input'
import TButton from 'vue-tailwind/dist/t-button'

const settings = {
  't-input': {
    component: TInput,
    props: {
      classes: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'
      // ...More settings
    }
  },
  't-button': {
    component: TButton,
    props: {
      classes: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed'
      // ...More settings
    }
  }

}

Vue.use(VueTailwind, settings)

export default {

  data () {
    return {}
  }
}
</script>
