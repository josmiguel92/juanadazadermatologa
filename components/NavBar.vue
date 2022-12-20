<template>
  <div
    class="px-4 py-5 w-full md:px-24 lg:px-8 z-10"
    :class="position + ' ' + backgroud"
    :style="inlineStyle"
  >
    <div class="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Company"
        title="Company"
        class="inline-flex items-center"
      >
        <img src="/logo.png" class="w-28">
        <div class="flex flex-col">
          <span
            class="ml-2 text-xl font-bold tracking-wide text-white uppercase"
          >Juana T. Daza Vergara</span>
          <span class="ml-2 text-sm  tracking-wide text-white">Dermatóloga Clinico-quir&uacute;rgica y est&eacute;tica</span>
        </div>
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex ">
        <li v-for="(item, index) in menuItems" :key="index">
          <a
            :href="item.path"
            :aria-label="item.name"
            :title="item.name"
            class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-8"
          >{{ item.name }}</a>
        </li>

        <li>
          <t-button to="/about">
            Agenda una cita
          </t-button>
        </li>
      </ul>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center"
                >
                  <img src="/logo.png" class="w-24">
                  <div class="flex flex-col">
                    <span
                      class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                    >Dra Juana Daza</span>
                    <span class="ml-2 text-sm  tracking-wide text-gray-800 uppercase">Dermatóloga</span>
                  </div>
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li v-for="(item, index) in menuItems" :key="index">
                  <a
                    :href="item.path"
                    :aria-label="item.name"
                    :title="item.name"
                    class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-primary"
                  >{{ item.name }}</a>
                </li>

                <li>
                  <t-button to="/about">
                    Agenda una cita
                  </t-button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'relative'
    },
    backgroud:
    {
      type: String,
      default: 'bg-transparent'
    },
    inlineStyle:
    {
      type: String,
      default: 'background-image: url(/img/disease-page-background.png);'
    }
  },
  data () {
    return {
      isMenuOpen: false,
      menuItems: [
        { name: 'Quiénes somos', path: '/about' },
        { name: 'Servicios', path: '/' },
        // { name: 'Misión y Visión', path: '/' },
        { name: 'Informes de Salud', path: '/' },
        { name: 'Tienda dermatológica', path: '/store' },
        { name: 'Contácto', path: '/' }

      ]
    }
  }
}
</script>
