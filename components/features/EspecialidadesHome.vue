<template>
  <div
    class="px-4 py-16 w-full md:px-24 lg:px-32 lg:py-20"
    style="background-color: #ffffff;
background-color: #7dcdc5;
background-image: linear-gradient(62deg, #7dcdc5 0%, #E0C3FC 100%);
"
  >
    <a id="healt_informs" />

    <div class="flex flex-col mb-6 lg:justify-between md:mb-8">
      <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 sm:mb-4">
          Nos preocupamos por ti!

        </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
      </h2>
      <p class="text-white text-xl">
        Este sitio web te ayudara a entender de forma clara las enfermedades de la piel, uñas y cabello, ademas de aclararte dudas de procedimiento esteticos y medicos, es decir que hacer antes, durante y despues de estos.
        <br class="hidden md:block">
        <span class="font-bold">te brindaremos la mejor asesoria con mucho amor!</span>
      </p>
    </div>
    <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      <FeatureCard
        v-for="(item, index) in featuresItems"
        :key="index"
        :name="item.name"
        :path="item.path"
        :image="item.image"
        :text="item.text"
      />
    </div>
  </div>
</template>
<script>
import FeatureCard from '~/components/common/FeatureCard.vue'

export default {
  components: { FeatureCard },

  data () {
    //  TODO: change paths
    return {
      featuresItems: [
        {
          name: 'Dermatologia Clínica Pediátrica',
          path: '/especialidades/dermatologia-pediatrica',
          image: '/img/dermatologiapediatrica.jpg',
          text: 'Diagnostico y tratamiento integral de enfermedades dermatológicas pediátricas'
        },
        {
          name: 'Dermatologia Clínica Adultos',
          path: '/especialidades/dermatologia-adultos',
          image: '/img/dermaadulto.jpg',
          text: 'Diagnóstico y tratamiento integral de enfermedades dermatológicas en adultos'
        },
        {
          name: 'Dermatología Estética',
          path: '/especialidades/dermatologia-estetica',
          image: '/img/derma-estetica.jpg',
          text: 'Tratamientos avanzados y eficaces (tu piel en manos de expertos)'
        },
        {
          name: 'Toma de biopsias y procedimientos menores',
          path: '/especialidades/dermatologia-procedimientos',
          image: '/img/procedimientos.jpg',
          text: 'Para llegar a diagnosticos acertados y resolver definitivamente algunas patologias. '
        }
      ]
    }
  }
}

</script>
