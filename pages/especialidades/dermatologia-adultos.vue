<template>
  <div>
    <nav-bar />

    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto  mt-24">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
          Dermatologia Clínica para Adultos
        </h2>

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
        { name: 'Toma de biopsias y procedimientos menores', path: '/', image: 'https://cdn.pixabay.com/photo/2021/09/28/15/55/laser-treatment-6664875_1280.jpg', text: 'Para llegar a diagnosticos acertados y resolver definitivamente algunas patologias. ' }
      ]
    }
  }

}
</script>
