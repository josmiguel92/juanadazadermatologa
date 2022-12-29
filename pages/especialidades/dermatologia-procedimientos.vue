<template>
  <div>
    <nav-bar />
    <UncategorizedArticlesList category-title="Toma de biopsias y procedimientos menores" filter-category="procedimientos" />
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  name: 'DermatologiaProcedimientos',
  components: { SiteFooter }
}
</script>
