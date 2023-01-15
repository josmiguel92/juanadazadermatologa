<template>
  <div class="inline-block px-14 py-16 text-center bg-primary  animate__fadeInUp animate__animated delay-100 animate__delay-1s">
    <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 ">
      <img src="/icons/tips-w.png" class="w-32">
    </div>
    <p class="font-bold tracking-wide text-white mb-6 uppercase">
      Consejo del dia
    </p>
    <p class="text-white">
      {{ randomFact() }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'DailyAdvice',
  data () {
    return {
      fact: [
        'Toma el sol por solo 15 o 20 minutos en horas no centrales antes de 10:00 am y después de 4:30 pm. Ayuda con el animo y el metabolismos de la vit D',
        'Nunca olvides el protector solar recuerda usarlo cada 3 a 4 horas en cualquier lugar!',
        'Al usar el protector solar es importante cubrir abundantemente toda la superficie expuesta al sol (cantidad generosa)',
        'Hidrata diariamente toda tu piel y no olvides tomar abundante agua!',
        'Cuando tu cuerpo no puede mas tu piel habla. aprende a entenderla',
        'Si sufres de dermatitis atópica Pueden bañarse, pero sólo con agua tibia y sustitutos de jabón, los baños deben ser cortos máximo 10 minutos',
        'Usa tejidos mas poroso como los del algodón, jeans o poliester que ofrecen mejor protección contra los rayos del sol',
        'Es muy importante el apoyo psicológico y terapia antiestrés en algunas enfermedades dermatológicas, ya que evitaría el empeoramiento de estas'
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
  