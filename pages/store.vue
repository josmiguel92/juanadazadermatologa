<template>
  <div>
    <nav-bar position="absolute" />
    <header-block />
    <features-block1 />
    <store-items-show />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'
import FeaturesBlock1 from '~/components/features/FeaturesBlock1.vue'
import StoreItemsShow from '~/components/features/StoreItemsShow.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeaderBlock, FeaturesBlock1, StoreItemsShow }
}
</script>
