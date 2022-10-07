<template>
  <div class="mb-16">
    <HomeSlider />

    <!-- <div data-aos="fade-up" data-aos-delay="300">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32" data-aos="zoom-in" data-aos-delay="500">
    </div>

    <div data-aos="zoom-in-right" data-aos-delay="300">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32">
      <img :src="`${$config.BASE_URL}/logo.png`" class="w-32" data-aos="zoom-out-right" data-aos-delay="500">
    </div> -->

    <div class="relative px-4 sm:px-0 -mt-24">
      <!-- <div class="absolute inset-0 bg-gray-100 h-1/2" /> -->
      <div class="relative grid mx-auto overflow-hidden rounded sm:w-2/3 sm:grid-cols-3 lg:max-w-screen-lg">
        <div class="inline-block px-14 py-16 text-center bg-primary  animate__fadeInUp animate__animated delay-100 animate__delay-1s">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 ">
            <img src="/icons/tips-w.png" class="w-32">
          </div>
          <p class="font-bold tracking-wide text-white mb-6 uppercase">
            Consejo del dia
          </p>
          <p class="text-white">
            Nunca olvides el protector solar recuerda usarlo cada 3 a 4 horas en cualquier lugar!
          </p>
        </div>
        <div class="inline-block px-14 py-16 text-center bg-secondary animate__fadeInUp animate__animated delay-200 animate__delay-2s">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 ">
            <img src="/icons/medic-w.png" class="w-32">
          </div>
          <p class="font-bold tracking-wide text-white mb-6 uppercase">
            sabias que
          </p>
          <p class="text-white">
            ¿bañarte muchas veces al dia puede dañar tu piel?
            <br>
            Si! Esto se debe a que eliminamos de nuestra piel el manto acido que nos ayuda a evitar infecciones.
          </p>
        </div>
        <div class="inline-block px-14 py-16 text-center bg-accent animate__fadeInUp animate__animated delay-300 animate__delay-3s">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 ">
            <img src="/icons/girl-w.png" class="w-32">
          </div>
          <p class="font-bold tracking-wide text-white mb-6 uppercase">
            frases motivacionales
          </p>
          <p class="text-white">
            No hay piel perfecta hay pieles sanas
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
