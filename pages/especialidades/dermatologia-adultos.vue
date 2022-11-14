<template>
  <div style="background-color:#7dcdc5;background-image:linear-gradient(62deg,#7dcdc5 0,#e0c3fc 100%)">
    <nav-bar />

    <div
      class="px-4 py-16 w-full md:px-24 lg:px-32 lg:py-20"
      style="padding-top:12rem
"
    >
      <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span class="inline-block mb-1 sm:mb-4">
            Dermatologia Clínica para Adultos

          </span>
          <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p class="text-gray-700 lg:text-sm lg:max-w-md">
          Este sitio web te ayudara a entender de forma clara las enfermedades de la piel, uñas y cabello, ademas de aclararte dudas de procedimiento esteticos y medicos, es decir que hacer antes, durante y despues de estos.
          <br class="hidden md:block">
          <span class="font-bold">te brindaremos la mejor asesoria con mucho amor!</span>
        </p>
      </div>

      <p v-if="$fetchState.pending">
        Loading content...
      </p>
      <p v-else-if="$fetchState.error">
        An error occurred :(
      </p>
      <div v-else>
        <div v-for="(category, index) in categories.items" :key="index" class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <!-- text - start -->
            <div class="mb-10 md:mb-16">
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                {{ category.title }}
              </h2>

              <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                {{ category.description }}
              </p>
            </div>
            <!-- text - end -->

            <div class="grid sm:grid-cols-4 gap-6">
              <div
                v-for="(item, cat_index) in filteredPatologies(category)"
                :key="cat_index"
              >
                <feature-card
                  v-if="item.category.includes(mainCategory)"
                  :image="baseUrl + item['@collectionId'] + '/' + item.id + '/' + item.image + '?thumb=400x400'"
                  :name="item.title"
                  path="#"
                  :text="item.desc"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PocketBase from 'pocketbase'
import NavBar from '~/components/NavBar.vue'
import FeatureCard from '~/components/common/FeatureCard.vue'

const PocketBase = require('pocketbase/dist/pocketbase.cjs')

// import HeaderBlock from '~/components/HeaderBlock.vue'
// import FeaturesBlock1 from '~/components/features/FeaturesBlock1.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, FeatureCard },
  data () {
    return {
      categories: this.categories,
      mainCategory: 'adultos'
    }
  },
  async fetch () {
    const baseUrlName = 'https://base.altaxi.app'
    const baseUrlPath = '/api/files/'
    this.baseUrl = baseUrlName + baseUrlPath
    const client = new PocketBase(baseUrlName)
    const categories = await client.records.getList('juana_patologias_categorys', 1, 50, {
      filter: 'groups ~ "' + this.mainCategory + '"',
      expand: 'patologies',
      sort: 'title'
    })

    this.categories = categories
  },
  methods: {
    filteredPatologies (category) {
      return category['@expand'].patologies.filter(this.checkMainCategory).sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    },
    checkMainCategory (patology) {
      return patology.category.includes(this.mainCategory)
    }
  }

}
</script>
