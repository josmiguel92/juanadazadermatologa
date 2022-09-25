<template>
  <div>
    <nav-bar />
    <header-block />
    <features-block1 />
    <div class="p-5">
      Hola mundo
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'
import FeaturesBlock1 from '~/components/features/FeaturesBlock1.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeaderBlock, FeaturesBlock1 }
}
</script>
