<template>
  <div>
    <nav-bar />

  <div class="px-4 py-16 w-full md:px-24 lg:px-32 lg:py-20"
  style="padding-top:12rem
">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 sm:mb-4">
          Dermatología Pediatrica

        </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
      </h2>
      <p class="text-gray-700 lg:text-sm lg:max-w-md">
        Este sitio web te ayudara a entender de forma clara las enfermedades de la piel, uñas y cabello, ademas de aclararte dudas de procedimiento esteticos y medicos, es decir que hacer antes, durante y despues de estos.
        <br class="hidden md:block">
        <span class="font-bold">te brindaremos la mejor asesoria con mucho amor!</span>
      </p>
    </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <feature-card v-for="(item, index) in items"
            :key="index"
            :image="item.image"
            :name="item.name"
            :path="item.path"
            :text="item.text"
          />

        </div>
      </div>
    </div>

</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FeatureCard from '~/components/common/FeatureCard.vue'
// import HeaderBlock from '~/components/HeaderBlock.vue'
// import FeaturesBlock1 from '~/components/features/FeaturesBlock1.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, FeatureCard },

  data () {
    return {
      items: [
        { name: 'Dermatologia Clínica Pediátrica', path: '/especialidades/dermatologia-pediatrica', image: 'https://media.istockphoto.com/photos/caucasian-mother-applying-healthy-skin-care-moisturizing-cream-on-picture-id1302810320?s=612x612', text: 'Diagnostico y tratamiento integral de enfermedades dermatológicas pediátricas' },
        { name: 'Dermatologia Clínica Adultos', path: '/', image: 'https://media.istockphoto.com/photos/attractive-dermatologist-in-white-coat-examining-skin-of-patient-in-picture-id1190138450?s=612x612', text: 'Diagnóstico y tratamiento integral de enfermedades dermatológicas en adultos' },
        { name: 'Dermatología Estética', path: '/', image: 'https://media.istockphoto.com/photos/dermapen-skin-needling-treatment-picture-id1271011637?s=612x612', text: 'Tratamientos avanzados y eficaces (tu piel en manos de expertos)' },
        { name: 'Toma de biopsias y procedimientos menores', path: '/', image: 'https://cdn.pixabay.com/photo/2021/09/28/15/55/laser-treatment-6664875_1280.jpg', text: 'Para llegar a diagnosticos acertados y resolver definitivamente algunas patologias. ' },
        { name: 'Dermatologia Clínica Pediátrica', path: '/especialidades/dermatologia-pediatrica', image: 'https://media.istockphoto.com/photos/caucasian-mother-applying-healthy-skin-care-moisturizing-cream-on-picture-id1302810320?s=612x612', text: 'Diagnostico y tratamiento integral de enfermedades dermatológicas pediátricas' },
        { name: 'Dermatologia Clínica Adultos', path: '/', image: 'https://media.istockphoto.com/photos/attractive-dermatologist-in-white-coat-examining-skin-of-patient-in-picture-id1190138450?s=612x612', text: 'Diagnóstico y tratamiento integral de enfermedades dermatológicas en adultos' },
        { name: 'Dermatología Estética', path: '/', image: 'https://media.istockphoto.com/photos/dermapen-skin-needling-treatment-picture-id1271011637?s=612x612', text: 'Tratamientos avanzados y eficaces (tu piel en manos de expertos)' },
        { name: 'Toma de biopsias y procedimientos menores', path: '/', image: 'https://cdn.pixabay.com/photo/2021/09/28/15/55/laser-treatment-6664875_1280.jpg', text: 'Para llegar a diagnosticos acertados y resolver definitivamente algunas patologias. ' }
      ]
    }
  }

}
</script>
