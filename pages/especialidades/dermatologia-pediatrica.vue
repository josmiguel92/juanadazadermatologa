<template>
  <div>
    <nav-bar />
    <CategorizedArticlesList category-title="Dermatología Pediatrica" filter-category="pediatrica" />
    <SiteFooter />
  </div>
</template>
<script>
export default {
  name: 'DermatologiaPediatrica',
  components: { },
  head () {
    return { title: 'Dermatología Pediatrica | Juana Daza Vergara ~ Dermatóloga Clinico-quirúrgica y estética' }
  }
}
</script>
