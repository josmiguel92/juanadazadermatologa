<template>
  <div>
    <nav-bar position="absolute"/>
    <header-block />

    <EspecialidadesHome />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'
import EspecialidadesHome from '~/components/features/EspecialidadesHome.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeaderBlock, EspecialidadesHome }
}
</script>
