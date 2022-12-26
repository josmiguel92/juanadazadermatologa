<template>
  <div>
    <nav-bar position="absolute" />
    <div class="p-8"></div>
    <home-about></home-about>
    <home-features></home-features>
    <home-team></home-team>
    <site-footer></site-footer>
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
