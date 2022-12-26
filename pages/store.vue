<template>
  <div>
    <nav-bar position="" backgroud="bg-primary" />
    <store-items-show />
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import StoreItemsShow from '~/components/features/StoreItemsShow.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, StoreItemsShow }
}
</script>
