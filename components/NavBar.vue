<template>
  <div
    class="px-4 py-5 w-full md:px-24 lg:px-8 z-10"
    :class="position + ' ' + backgroud"
    :style="inlineStyle"
  >
    <div class="relative flex items-center justify-between">
      <NuxtLink
        to="/"
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
      </NuxtLink>
      <ul class="flex items-center hidden space-x-8 lg:flex ">
        <li v-for="(item, index) in menuItems" :key="index">
          <NuxtLink
            :to="item.path"
            :aria-label="item.name"
            :title="item.name"
            class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-8"
          >{{ item.name }}</NuxtLink>
        </li>

        <li>
          <a href="https://wa.me/573224373656?text=Agendar Cita" target="_blank" class="flex gap-2 inline-block bg-secondary hover:bg-primary active:bg-accent focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    <svg
                      id="Capa_1"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 220.262 220.262"
                      xml:space="preserve"
                      class="w-5 h-5"
                      fill="currentColor"
                    >
                      <g>
                        <path
                          d="M110.127,0C50.606,0,2.184,48.424,2.184,107.944c0,23.295,9.455,44.211,13.521,52.123
                        c1.893,3.685,6.416,5.135,10.099,3.243c3.684-1.893,5.136-6.415,3.243-10.099c-3.566-6.941-11.862-25.247-11.862-45.268
                        C17.184,56.695,58.878,15,110.127,15c51.254,0,92.951,41.695,92.951,92.944c0,51.251-41.697,92.946-92.951,92.946
                        c-20.044,0-35.971-6.94-41.889-9.925c-1.755-0.886-3.788-1.046-5.66-0.447l-47.242,15.097c-3.945,1.261-6.122,5.481-4.861,9.427
                        c1.018,3.187,3.968,5.219,7.142,5.219c0.757,0,1.526-0.115,2.285-0.358l44.391-14.186c9.287,4.311,25.633,10.173,45.834,10.173
                        c59.524,0,107.951-48.424,107.951-107.946C218.078,48.424,169.651,0,110.127,0z"
                        />
                        <path
                          d="M88.846,89.537c-3.285,2.523-3.902,7.231-1.38,10.517c2.523,3.285,7.23,3.903,10.517,1.38
                        c2.299-1.766,8.406-6.456,7.512-14.845c-0.551-4.987-5.417-11.83-9.402-16.691c-5.831-7.114-10.767-11.327-14.643-12.513
                        c-3.632-1.126-7.354-0.948-11.066,0.53c-7.636,3.052-13.025,8.108-15.585,14.622c-2.493,6.344-2.04,13.443,1.313,20.537
                        c7.827,16.522,18.288,30.791,31.093,42.413c0.05,0.047,0.101,0.093,0.152,0.139c12.987,11.48,28.352,20.325,45.675,26.293
                        c3.287,1.129,6.513,1.692,9.611,1.692c3.892,0,7.583-0.888,10.94-2.658c6.191-3.264,10.621-9.177,12.814-17.115
                        c1.056-3.848,0.82-7.564-0.689-11.024c-1.619-3.745-6.35-8.184-14.064-13.193c-5.269-3.422-12.601-7.5-17.64-7.5
                        c-0.003,0-0.007,0-0.011,0c-8.406,0.034-12.397,6.621-13.899,9.102c-2.146,3.543-1.014,8.155,2.529,10.301
                        c3.541,2.146,8.154,1.015,10.301-2.529c0.593-0.98,0.969-1.5,1.205-1.772c4.236,1.23,15.567,8.642,17.889,11.761
                        c0.038,0.166,0.043,0.417-0.082,0.874c-0.739,2.675-2.268,6.204-5.349,7.828c-2.879,1.516-6.312,0.863-8.677,0.051
                        c-15.413-5.31-29.053-13.142-40.543-23.279c-0.003-0.003-0.007-0.006-0.01-0.01c-11.377-10.308-20.693-23.023-27.688-37.788
                        c-1.071-2.268-2.1-5.607-0.91-8.634c1.274-3.242,4.613-5.15,7.183-6.177c0.441-0.176,0.69-0.203,0.871-0.179
                        c3.358,1.965,11.969,12.402,13.66,16.477C90.229,88.41,89.753,88.84,88.846,89.537z"
                        />
                      </g>
                    </svg>

                    Agendar Cita
                  </a>
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
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-10">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <NuxtLink
                  to="/"
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
                </NuxtLink>
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
                  <NuxtLink
                    :to="item.path"
                    :aria-label="item.name"
                    :title="item.name"
                    class="font-medium tracking-wide text-secondary transition-colors duration-200 hover:text-primary"
                  >{{ item.name }}</NuxtLink>
                </li>

                <li>
                  <a href="https://wa.me/573224373656?text=Agendar Cita" target="_blank" class="flex gap-2 inline-block bg-secondary hover:bg-primary active:bg-accent focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    <svg
                      id="Capa_1"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 220.262 220.262"
                      xml:space="preserve"
                      class="w-5 h-5"
                      fill="currentColor"
                    >
                      <g>
                        <path
                          d="M110.127,0C50.606,0,2.184,48.424,2.184,107.944c0,23.295,9.455,44.211,13.521,52.123
                        c1.893,3.685,6.416,5.135,10.099,3.243c3.684-1.893,5.136-6.415,3.243-10.099c-3.566-6.941-11.862-25.247-11.862-45.268
                        C17.184,56.695,58.878,15,110.127,15c51.254,0,92.951,41.695,92.951,92.944c0,51.251-41.697,92.946-92.951,92.946
                        c-20.044,0-35.971-6.94-41.889-9.925c-1.755-0.886-3.788-1.046-5.66-0.447l-47.242,15.097c-3.945,1.261-6.122,5.481-4.861,9.427
                        c1.018,3.187,3.968,5.219,7.142,5.219c0.757,0,1.526-0.115,2.285-0.358l44.391-14.186c9.287,4.311,25.633,10.173,45.834,10.173
                        c59.524,0,107.951-48.424,107.951-107.946C218.078,48.424,169.651,0,110.127,0z"
                        />
                        <path
                          d="M88.846,89.537c-3.285,2.523-3.902,7.231-1.38,10.517c2.523,3.285,7.23,3.903,10.517,1.38
                        c2.299-1.766,8.406-6.456,7.512-14.845c-0.551-4.987-5.417-11.83-9.402-16.691c-5.831-7.114-10.767-11.327-14.643-12.513
                        c-3.632-1.126-7.354-0.948-11.066,0.53c-7.636,3.052-13.025,8.108-15.585,14.622c-2.493,6.344-2.04,13.443,1.313,20.537
                        c7.827,16.522,18.288,30.791,31.093,42.413c0.05,0.047,0.101,0.093,0.152,0.139c12.987,11.48,28.352,20.325,45.675,26.293
                        c3.287,1.129,6.513,1.692,9.611,1.692c3.892,0,7.583-0.888,10.94-2.658c6.191-3.264,10.621-9.177,12.814-17.115
                        c1.056-3.848,0.82-7.564-0.689-11.024c-1.619-3.745-6.35-8.184-14.064-13.193c-5.269-3.422-12.601-7.5-17.64-7.5
                        c-0.003,0-0.007,0-0.011,0c-8.406,0.034-12.397,6.621-13.899,9.102c-2.146,3.543-1.014,8.155,2.529,10.301
                        c3.541,2.146,8.154,1.015,10.301-2.529c0.593-0.98,0.969-1.5,1.205-1.772c4.236,1.23,15.567,8.642,17.889,11.761
                        c0.038,0.166,0.043,0.417-0.082,0.874c-0.739,2.675-2.268,6.204-5.349,7.828c-2.879,1.516-6.312,0.863-8.677,0.051
                        c-15.413-5.31-29.053-13.142-40.543-23.279c-0.003-0.003-0.007-0.006-0.01-0.01c-11.377-10.308-20.693-23.023-27.688-37.788
                        c-1.071-2.268-2.1-5.607-0.91-8.634c1.274-3.242,4.613-5.15,7.183-6.177c0.441-0.176,0.69-0.203,0.871-0.179
                        c3.358,1.965,11.969,12.402,13.66,16.477C90.229,88.41,89.753,88.84,88.846,89.537z"
                        />
                      </g>
                    </svg>

                    Agendar Cita
                  </a>
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
        { name: 'Servicios', path: '/#services' },
        // { name: 'Misión y Visión', path: '/' },
        { name: 'Informes de Salud', path: '/#healt_informs' },
        { name: 'Tienda dermatológica', path: '/store' },
        { name: 'Teleconsulta', path: '/teleconsulta' },
        { name: 'Contácto', path: '/#contact' }

      ]
    }
  }
}
</script>
