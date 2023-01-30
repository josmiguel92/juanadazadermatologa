<template>
  <div>
    <nav-bar position="" backgroud="bg-primary" />
    <store-items-show />
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import StoreItemsShow from '~/components/store/StoreItemsShow.vue'
export default {
  name: 'IndexStorePage',
  components: { NavBar, StoreItemsShow }
}
</script>
