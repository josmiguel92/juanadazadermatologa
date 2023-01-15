<template>
  <div>
    <nav-bar position="absolute" />
    <div class="p-8" />
    <home-about />
    <home-features />
    <home-team />
    <site-footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HomeAbout from '~/components/home/HomeAbout.vue'
import HomeTeam from '~/components/home/HomeTeam.vue'
import HomeFeatures from '~/components/home/HomeFeatures.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  name: 'IndexPage',
  components: { NavBar, HomeAbout, HomeTeam, HomeFeatures, SiteFooter }
}

</script>
