<template>
  <div>
    <nav-bar />
    <UncategorizedArticlesList category-title="Dermatología Estética" filter-category="estetica" />
    <SiteFooter />
  </div>
</template>

<script>
export default {
  name: 'DermatologiaProcedimientos',
  components: { },
  head () {
    return { title: 'Dermatología Estética | Juana Daza Vergara ~ Dermatóloga Clinico-quirúrgica y estética' }
  }
}
</script>
