<template>
  <div class="inline-block px-14 py-16 text-center bg-secondary animate__fadeInUp animate__animated delay-200 animate__delay-2s">
    <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 ">
      <img src="/icons/medic-w.png" class="w-32">
    </div>
    <p class="font-bold tracking-wide text-white mb-6 uppercase">
      Sabias Que
    </p>
    <p class="text-white">
      {{ randomFact() }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'KnowWhat',
  data () {
    return {
      fact: [
        '¿Bañarte muchas veces al dia puede dañar tu piel? Si! Esto se debe a que eliminamos de nuestra piel el manto acido que nos ayuda a evitar infecciones.',
        '¿Sabias que el 80% del envejecimiento de nuestra piel se debe a las radiaciones ultravioleta?',
        '¿Sabias que cada 9 minutos alguien muere por cáncer de piel en el mundo?',
        '¿Sabias que 33.000 muertes en el mundo por cáncer de piel podrían haberse prevenido si los pacientes hubieran buscado ayuda medica?',
        '¿Sabias que 1/3 de los pacientes con cáncer, tienen cáncer de piel?',
        '¿Sabias que el estrés pueden desencadenar procesos alérgicos e inflamatorios que inducen a la aparición de algunas enfermedades y al empeoramiento de otras?',
        '¿Sabias que existen mas de 190 medicamentos fotosensibles? Es por eso que deberás consultar a tu dermatólogo si es conveniente exponerte al sol al ordenarte un medicamento!',
        '¿Sabias que los protectores solares te protegen del envejecimiento, manchas y el riesgo de presentar cáncer de piel?',
        '¿Sabias que recibir el sol ayuda a mejorar el animo? Esto se debe a la estimulación de ciertas hormonas que contribuyen a mejorar el estado de animo. '
      ]
    }
  },
  methods: {
    randomFact () {
      return this.fact[Math.floor(Math.random() * this.fact.length)]
    }
  }
}
</script>
