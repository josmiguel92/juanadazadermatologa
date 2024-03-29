<template>
  <div
    class="px-4 py-16 w-full md:px-24 lg:px-32 lg:py-20"
    style="padding-top:8rem"
  >
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 sm:mb-4">
          {{ categoryTitle }}

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
    <div v-else class="flex">
      <div class="hidden md:flex w-1/6 mt-52">
        <nav class="flex flex-col h-40 index w-full">
          <a v-for="(category, index) in categories.items" :key="index" class="text-gray-800 text-lg font-bold my-5 pr-2 cursor-pointer uppercase" @click="scrollToAnchorPoint(category.id)">
            {{ cleanTitle(category.title) }}
          </a>
        </nav>
      </div>
      <div class="w-full md:w-5/6">
        <div v-for="(category, index) in categories.items" :key="index" class="bg-white py-6 sm:py-8 lg:py-12">
          <div :id="category.id" :ref="category.id" class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <!-- text - start -->
            <div class="mb-10 md:mb-16">
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                {{ cleanTitle(category.title) }}
              </h2>

              <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                {{ category.description }}
              </p>
            </div>
            <!-- text - end -->

            <div class="grid sm:grid-cols-4 md:grid-cols-3 gap-6">
              <div
                v-for="(item, cat_index) in filteredPatologies(category)"
                :key="cat_index"
              >
                <feature-card
                  v-if="item.category.includes(mainCategory)"
                  :image="baseUrl + item.collectionId + '/' + item.id + '/' + item.image + '?thumb=400x400'"
                  :name="cleanTitle(item.title)"
                  :path="'/articles/' + slugify(cleanTitle(item.title)) + '/' + item.id"
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
import FeatureCard from '~/components/common/FeatureCard.vue'
const PocketBase = require('pocketbase/dist/pocketbase.cjs')

// import HeaderBlock from '~/components/HeaderBlock.vue'
// import FeaturesBlock1 from '~/components/features/FeaturesBlock1.vue'
export default {
  name: 'CategorizedArticlesList',
  components: { FeatureCard },
  props: {
    filterCategory: String,
    categoryTitle: String
  },
  data () {
    return {
      categories: this.categories,
      mainCategory: this.filterCategory,
      baseUrl: 'https://base.altaxi.app/api/files/'
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
      return category.expand.patologies.filter(this.checkMainCategory).sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    },
    checkMainCategory (patology) {
      return patology.category.includes(this.mainCategory)
    },
    scrollToAnchorPoint (refName) {
      const el = this.$refs[refName][0]
      el.scrollIntoView({ behavior: 'smooth' })
    },
    cleanTitle (title) {
      title = title.trim()
      if (title.substring(title.length - 1, title.length) === '.') { title = title.substring(0, title.length - 1) }
      return title
    },
    slugify (title) {
      return title.replace(/[\W_]+/g, '-')
    }
  }
}
</script>

<style>
.index {
  position: sticky;
  top: 3rem;
  margin-left: -3rem;
}</style>
