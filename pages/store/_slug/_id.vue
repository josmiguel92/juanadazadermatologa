<template>
  <div>
    <nav-bar position="" backgroud="bg-primary" />

    <div
      class="px-4 py-16 w-full md:px-24 lg:px-32 lg:py-20"
      style="padding-top:4rem"
    >
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- images - start -->
            <div class="space-y-4">
              <div class="bg-gray-100 rounded-lg overflow-hidden relative">
                <img :src="imagePath + record.image" loading="lazy" :alt="record.title" class="w-full h-full object-cover object-center">

                <span
                  v-if="record.reference!=''"
                  class="bg-accent text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg absolute left-0 top-3 px-3 py-1.5"
                >{{ record.reference }}</span>
              </div>
            </div>
            <!-- images - end -->

            <!-- content - start -->
            <div class="md:py-8">
              <!-- name - start -->
              <div class="mb-2 md:mb-3">
                <!-- <span class="inline-block text-gray-500 mb-0.5">Fancy Brand</span> -->
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                  {{ record.name }}
                </h2>
              </div>
              <!-- name - end -->

              <!-- rating - start -->
              <!-- <div class="flex items-center mb-6 md:mb-10">
                <div class="flex gap-0.5 -ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span class="text-gray-500 text-sm ml-2">4.2</span>

                <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 ml-4">view all 47 reviews</a>
              </div> -->
              <!-- rating - end -->

              <!-- size - start -->
              <!-- <div class="mb-8 md:mb-10">
                <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Size</span>

                <div class="flex flex-wrap gap-3">
                  <button type="button" class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100">XS</button>
                  <button type="button" class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100">S</button>
                  <span class="w-12 h-8 flex justify-center items-center bg-indigo-500 text-white text-sm font-semibold text-center border border-indigo-500 rounded-md cursor-default">M</span>
                  <button type="button" class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100">L</button>
                  <span class="w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed">XL</span>
                </div>
              </div> -->
              <!-- size - end -->

              <!-- price - start -->
              <div class="mb-4">
                <div class="flex items-end gap-2">
                  <span class="text-gray-800 text-xl md:text-2xl font-bold">{{ formatMoney(record.price) }}</span>
                  <!-- <span class="text-red-500 line-through mb-0.5">$30.00</span> -->
                </div>

                <span class="text-gray-500 text-sm">incl. envío</span>
              </div>
              <!-- price - end -->

              <!-- shipping notice - start -->
              <div class="flex items-center text-gray-500 gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>

                <span class="text-sm">envío en 2-4 días</span>
              </div>
              <!-- shipping notice - end -->

              <!-- buttons - start -->
              <div class="flex gap-2.5">
                <a v-if="record.link != ''" :href="record.link" target="_blank" class="inline-block flex-1 sm:flex-none hover:bg-primary bg-secondary active:bg-primary focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Ordenar producto</a>

                <!-- <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a> -->
              </div>
              <!-- buttons - end -->

              <!-- description - start -->
              <div class="mt-10 md:mt-16 lg:mt-20">
                <div class="text-gray-800 text-lg font-semibold mb-3">
                  Descripción
                </div>

                <p class="text-gray-500">
                  {{ record.description }}
                </p>

                <p v-if="record.details" class="text-gray-500">
                  {{ record.details }}
                </p>
              </div>
              <!-- description - end -->
            </div>
            <!-- content - end -->
          </div>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
// import PocketBase from 'pocketbase'
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'ProductsDetailsPage',
  components: { NavBar },

  async asyncData ({ params }) {
    const baseUrlName = 'https://base.altaxi.app'
    const baseUrlPath = '/api/files/'
    const collection = 'juana_store_products'
    const baseUrl = baseUrlName + baseUrlPath
    const recordUrl = baseUrlName + '/api/collections/' + collection + '/records/' + params.id
    const record = await fetch(recordUrl).then(res =>
      res.json()
    )

    console.log(record)
    return {
      baseUrl,
      record,
      imagePath: baseUrl + record.collectionId + '/' + record.id + '/'
    }
  },
  data () {
    return {
      record: this.record,
      slug: this.slug
      // mainCategory: 'adultos'
    }
  },
  methods: {
    formatMoney (price) {
      // Create our number formatter.
      const formatter = new Intl.NumberFormat('es-US', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0

        // These options are needed to round to whole numbers if that's what you want.
        // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      })

      return formatter.format(price) /* $2,500.00 */
    }
  }

}
</script>
