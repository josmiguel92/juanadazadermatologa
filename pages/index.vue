<template>
  <div>
    <nav-bar position="absolute" />
    <header-block />

    <EspecialidadesHome />
    <HomeTeam />
    <HomeFeatures />
    <HomeAdvice />

  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'
import EspecialidadesHome from '~/components/features/EspecialidadesHome.vue'
import HomeTeam from '~/components/home/HomeTeam.vue'
import HomeFeatures from '~/components/home/HomeFeatures.vue'
import HomeAdvice from '~/components/home/HomeAdvice.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeaderBlock, EspecialidadesHome, HomeTeam, HomeFeatures, HomeAdvice }
}
</script>
