<template>
  <div>
    <nav-bar />
    <CategorizedArticlesList category-title="Dermatologia Clínica para Adultos" filter-category="adultos" />
    <SiteFooter />
  </div>
</template>
<script>
export default {
  name: 'DermatologiaAdultos',
  components: { },
  head () {
    return { title: 'Dermatologia Clínica para Adultos | Juana Daza Vergara ~ Dermatóloga Clinico-quirúrgica y estética' }
  }
}
</script>
