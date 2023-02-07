<template>
  <div>
    <nav-bar position="" backgroud="bg-primary" />

    <div
      class="px-4 py-16 w-full md:px-24 lg:px-32 lg:py-20"
      style="padding-top:6rem"
    >
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <h1 class="text-gray-800 text-5xl sm:text-5xl font-bold mb-4 md:mb-6">
            {{ record.title }}
          </h1>

          <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
            <p class="text-gray-500 lg:text-sm lg:max-w-md">
              {{ record.desc }}
            </p>
          </div>

          <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
            <img :src="imagePath + record.image" loading="lazy" :alt="record.title + ': ' + record.desc" class="w-full h-full object-cover object-center max-h-[25rem]">
          </div>

          <article class="prose lg:prose-xl prose-stone max-w-5xl" v-html="$md.render(record.article)" />

          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div class="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
                <div class="flex items-center gap-12">
                  <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                    Galer&iacute;a
                  </h2>

                  <!-- <p class="max-w-screen-sm hidden md:block text-gray-500">
                    This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.
                  </p> -->
                </div>
              </div>

              <div class="grid grid-cols-2 grid-cols-3 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
                <!-- image - start -->
                <div v-for="(image, index) in record.galery" :key="index" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                  <img :src="imagePath + image + '?thumb=400x400'" loading="lazy" alt="" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200">

                  <!-- <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none" />

                  <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">VR</span> -->
                </div>
                <!-- image - end -->
              </div>
            </div>
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
  name: 'IndexPage',
  components: { NavBar },

  async asyncData ({ params }) {
    const baseUrlName = 'https://base.altaxi.app'
    const baseUrlPath = '/api/files/'
    const collection = 'juana_patologias'
    const baseUrl = baseUrlName + baseUrlPath

    const recordUrl = baseUrlName + '/api/collections/' + collection + '/records/' + params.id
    const record = await fetch(recordUrl).then(res =>
      res.json()
    )

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
  head () {
    return { title: this.record.title + ' | Juana Daza Vergara ~ Dermatóloga Clinico-quirúrgica y estética' }
  }

}
</script>
