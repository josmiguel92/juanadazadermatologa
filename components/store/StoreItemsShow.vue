<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <a id="store" />
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex justify-between items-end gap-4 mb-10">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold ">
          Productos dermatol&oacute;gicos recomendados
        </h2>

        <!-- <a href="#" class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Ver todos</a> -->
      </div>

      <p v-if="$fetchState.pending">
        Loading content...
      </p>
      <p v-else-if="$fetchState.error">
        An error occurred :(
      </p>
      <div v-else>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <!-- product - start -->
          <div
            v-for="(item, index) in products"
            :key="index"
          >
            <a
              :href="'/store/' + slugify(cleanTitle(item.name)) + '/' + item.id"
              class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
            >
              <img
                :src="baseUrl + item.collectionId + '/' + item.id + '/' + item.image + '?thumb=400x400'"
                loading="lazy"
                :alt="item.name"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              >

              <span
                v-if="item.reference!=''"
                class="bg-accent text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg absolute left-0 top-3 px-3 py-1.5"
              >{{ item.reference }}</span>
            </a>

            <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
              <div class="flex flex-col w-full">
                <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                  <a
                    :href="'/store/' + slugify(cleanTitle(item.name)) + '/' + item.id"
                    class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                  >{{ item.name }}</a>
                  <span class="text-gray-600 text-sm font-bold">{{ formatMoney(item.price) }}</span>
                </div>
                <span class="text-gray-500 text-sm lg:text-base line-clamp-3 min-h-[2rem] max-h-24">{{ item.description }}</span>
                <div class="flex gap-2">
                  <a
                    :href="'/store/' + slugify(cleanTitle(item.name)) + '/' + item.id"
                    class="grow inline-block flex-1 bg-primary hover:bg-secondary active:bg-primary focus-visible:ring ring-primary text-white my-3 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >
                    Detalles
                  </a>
                  <a v-if="item.link != ''" :href="item.link" target="_blank" class="grow-0 inline-block flex-1 bg-secondary hover:bg-primary active:bg-primary focus-visible:ring ring-primary text-white my-3 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                      <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- product - end -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const PocketBase = require('pocketbase/dist/pocketbase.cjs')

export default {
  name: 'StoreItemsShow',

  data () {
    return {
      products: this.products
    }
  },
  async fetch () {
    const baseUrlName = 'https://base.altaxi.app'
    const baseUrlPath = '/api/files/'
    this.baseUrl = baseUrlName + baseUrlPath
    const client = new PocketBase(baseUrlName)
    const products = await client.records.getList('juana_store_products', 1, 50, {
      filter: 'active = True',
      sort: '+created'
    })

    this.products = products.items
    console.log(this.products)
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
    },
    cleanTitle (title) {
      title = title.trim()
      if (title.substring(title.length - 1, title.length) === '.') { title = title.substring(0, title.length - 1) }
      return title
    },
    slugify (title) {
      return title.replace(/ /g, '-')
    }
  }

}
</script>
