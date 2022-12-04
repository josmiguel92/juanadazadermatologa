<template>
  <div>
    <nav-bar position="absolute" />
    <header-block />

    <EspecialidadesHome />
    <HomeAbout />
    <HomeFeatures />
    <HomeTeam />
    <HomeAdvice />
    <ContactForm />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'
import EspecialidadesHome from '~/components/features/EspecialidadesHome.vue'
import HomeAbout from '~/components/home/HomeAbout.vue'
import HomeFeatures from '~/components/home/HomeFeatures.vue'
import HomeAdvice from '~/components/home/HomeAdvice.vue'
import HomeTeam from '~/components/home/HomeTeam.vue'
import ContactForm from '~/components/home/ContactForm.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeaderBlock, EspecialidadesHome, HomeAbout, HomeFeatures, HomeAdvice, HomeTeam, ContactForm }
}
</script>
