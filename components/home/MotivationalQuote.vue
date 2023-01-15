<template>
  <div class="inline-block px-14 py-16 text-center bg-accent animate__fadeInUp animate__animated delay-300 animate__delay-3s">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 ">
            <img src="/icons/girl-w.png" class="w-32">
          </div>
          <p class="font-bold tracking-wide text-white mb-6 uppercase">
            frases motivacionales
          </p>
          <p class="text-white">
            {{ randomFact() }}
          </p>
        </div>
</template>
<script>
export default {
  name: 'MotivationalQuote',
  data () {
    return {
      fact: [
        'No hay piel perfecta hay pieles sanas',
        'Los sueños se persiguen desde la infancia, aquí soñamos con pieles sanas',
        'No se puede derrotar a las personas que nunca se rinden',
        'Un paso a la vez se llega a la cima',
        'Amar mi piel es cuidarla día a día',
        'Continua a pesar de que todos esperen que abandones',
        'El genio se hace con un 1% de talento y un 99% de trabajo',
        'Que tus sueños te lleven ahí donde tu corazón es feliz',
        'Trabaja duro y en silencio y tu éxito hará todo el ruido',
        'Los caminos difíciles conducen a destinos hermosos'
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
