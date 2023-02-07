<template>
  <div>
    <nav-bar />
    <UncategorizedArticlesList category-title="Toma de biopsias y procedimientos menores" filter-category="procedimientos" />
    <SiteFooter />
  </div>
</template>

<script>

export default {
  name: 'DermatologiaProcedimientos',
  components: { },
  head () {
    return { title: 'Toma de biopsias y procedimientos menores | Juana Daza Vergara ~ Dermatóloga Clinico-quirúrgica y estética' }
  }
}
</script>
