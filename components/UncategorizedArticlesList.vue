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
    <div v-else>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <feature-card
          v-for="(item, index) in posts"
          :key="index"
          :image="baseUrl + item.collectionId + '/' + item.id + '/' + item.image + '?thumb=400x400'"
          :name="cleanTitle(item.title)"
          :path="'/articles/' + slugify(cleanTitle(item.title)) + '/' + item.id"
          :text="item.desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from '~/components/common/FeatureCard.vue'
const PocketBase = require('pocketbase/dist/pocketbase.cjs')
export default {
  name: 'UncategorizedArticlesList',
  components: { FeatureCard },

  props: {
    filterCategory: String,
    categoryTitle: String
  },
  data () {
    return {
      posts: this.posts,
      mainCategory: this.filterCategory,
      baseUrl: 'https://base.altaxi.app/api/files/'

    }
  },

  async fetch () {
    const remoteCollection = {
      name: 'juana_patologias',
      filter: 'category ~ "' + this.mainCategory + '"',
      sort: 'title'
    }
    const baseUrlName = 'https://base.altaxi.app'
    const baseUrlPath = '/api/files/'
    this.baseUrl = baseUrlName + baseUrlPath
    const client = new PocketBase(baseUrlName)
    const resultList = await client.records.getList(
      remoteCollection.name, 1, 50,
      {
        filter: remoteCollection.filter,
        sort: remoteCollection.sort
      }
    )
    this.posts = resultList.items
  },
  methods: {
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
