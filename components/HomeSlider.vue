<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <slider-item-1 />
      <slider-item-2 />
      <!-- <slider-item-3 /> -->
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import SliderItem1 from '~/components/slider/SliderItem1.vue'
import SliderItem2 from '~/components/slider/SliderItem2.vue'
// import SliderItem3 from '~/components/slider/SliderItem3.vue'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'HomeSlider',
  components: { VueSlickCarousel, SliderItem1, SliderItem2 },
  data () {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots slick-dots-hero -mt-32',
        infinite: true,
        rows: 1,
        initialSlide: 0,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        // arrows: true,
        autoplay: true,
        fade: true
      }
    }
  }
}
</script>
