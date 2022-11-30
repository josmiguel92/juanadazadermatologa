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
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <!-- product - start -->
          <div
            v-for="(item, index) in products"
            :key="index"
          >
            <a href="#" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
              <img
                :src="baseUrl + item['@collectionId'] + '/' + item.id + '/' + item.image + '?thumb=400x400'"
                loading="lazy"
                :alt="item.name"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              >

              <span
                v-if="item.reference!=''"
                class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg absolute left-0 top-3 px-3 py-1.5"
              >{{ item.reference }}</span>
            </a>

            <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
              <div class="flex flex-col">
                <a href="#" class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">{{ item.name }}</a>
                <span class="text-gray-500 text-sm lg:text-base">{{ item.description }}</span>
              </div>

              <div class="flex flex-col items-end">
                <span class="text-gray-600 lg:text-lg font-bold">${{ item.price }}</span>
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
  }
  // methods: {

  // }

}
</script>
