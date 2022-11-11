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

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <feature-card
          v-for="(item, index) in posts"
          :key="index"
          :image="baseUrl + item['@collectionId'] + '/' + item.id + '/' + item.image + '?thumb=400x400'"
          :name="item.title"
          path="#"
          :text="item.desc"
        />
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
      posts: this.posts
    }
  },

  // async fetch () {
  //   const client = new PocketBase('https://base.altaxi.app')
  //   const resultList = await client.records.getList('juana_patologias', 1, 50, {
  //     filter: 'category ~ "adultos"',
  //     sort: 'title'
  //   })
  //   this.posts = resultList.items
  //   this.baseUrl = client.baseUrl + '/api/files/'
  // }
  async fetch () {
    // Definition data:
    // const localCollectioName = 'juana_patologias_adultos'
    const remoteCollection = {
      name: 'juana_patologias',
      filter: 'category ~ "adultos"',
      sort: 'title'
    }
    const baseUrlName = 'https://base.altaxi.app'
    const baseUrlPath = '/api/files/'

    this.baseUrl = baseUrlName + baseUrlPath
    // const results = JSON.parse(window.localStorage.getItem(localCollectioName))
    // if (results) {
    //   this.posts = results
    // } else {
    //   // load from api

    const client = new PocketBase(baseUrlName)
    const resultList = await client.records.getList(
      remoteCollection.name, 1, 50,
      {
        filter: remoteCollection.filter,
        sort: remoteCollection.sort
      }
    )

    this.posts = resultList.items

    //   // store to local
    //   window.localStorage.setItem(localCollectioName, JSON.stringify(this.posts))
    // }
  }

}
</script>
