<template>
  <div class="mb-16">
    <HomeSlider />

    <!-- <div data-aos="fade-up" data-aos-delay="300">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32" data-aos="zoom-in" data-aos-delay="500">
    </div>

    <div data-aos="zoom-in-right" data-aos-delay="300">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32" data-aos="zoom-out-right" data-aos-delay="500">
    </div> -->

    <div class="relative px-4 sm:px-0 -mt-24">
      <!-- <div class="absolute inset-0 bg-gray-100 h-1/2" /> -->
      <div class="relative grid mx-auto overflow-hidden rounded sm:w-2/3 sm:grid-cols-3 lg:max-w-screen-lg">
        <DailyAdvice />
        <KnowWhat />
        <MotivationalQuote />
      </div>
    </div>
  </div>
</template>
<script>
import DailyAdvice from './home/DailyAdvice.vue'
import KnowWhat from './home/KnowWhat.vue'
import MotivationalQuote from './home/MotivationalQuote.vue'
export default {
  name: 'HeaderBlock',
  components: { DailyAdvice, KnowWhat, MotivationalQuote }
}
</script>
