<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Conozca a nuestro equipo
        </h2>

        <p class="max-w-screen-md  text-2xl text-gray-500 text-center mx-auto">
          Trabajamos con amor
        </p>
      </div>
      <!-- text - end -->

      <div class="grid grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-12 lg:gap-y-12">
        <!-- person - start -->
        <div v-for="(person, index) in team" :key="index">
          <div class="h-56 sm:h-60 md:h-96 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
            <img :src="person.image" loading="lazy" :alt="person.name" class="w-full h-full object-cover object-top">
          </div>

          <div>
            <div class="text-secondary md:text-lg font-bold">
              {{ person.name }}
            </div>
            <p class="text-gray-500 text-sm md:text-base mb-3 md:mb-4">
              {{ person.bio }}
            </p>

            <!-- social - start -->
            <div class="flex">
              <div class="flex gap-4">

                <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">

                  <svg
                  class="w-5 h-5 inline-block"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z"/>
                    </g>
                    <g>
                      <path d="M128,80a48,48,0,1,0,48,48A48.05436,48.05436,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32.03667,32.03667,0,0,1,128,160Z"/>
                      <path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28Zm40,144a40.04521,40.04521,0,0,1-40,40H84a40.04521,40.04521,0,0,1-40-40V84A40.04521,40.04521,0,0,1,84,44h88a40.04521,40.04521,0,0,1,40,40Z"/>
                      <circle cx="180" cy="76" r="12"/>
                    </g>
                  </svg>
                  {{ person.instagram}}
                </a>
              </div>
            </div>
          <!-- social - end -->
          </div>
        </div>
        <!-- person - end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Dra. Juana T. Daza Vergara',
          image: '/img/team/juanita.jpg',
          bio: 'Hola Mundo',
          instagram: '@'
        },
        {
          name: 'Dra. Souhair Aoun Ortiz',
          image: '/img/team/susu.jpg',
          bio: 'Hola, me llamo Souhair Aoun Ortiz, Soy Dominico-Libanesa, Dermatóloga Clínico Quirúrgico y Estético de profesión y vocación, Soy egresada de la Universidad de Ciencias Médicas de la Habana, realicé mis estudios de Grado en la Universidad Tecnológica de Santiago, en República Dominicana, actualmente Me encuentro laborando en Centro Médico Dr. Bournigal e Instituto Dermatológico y Cirugía de piel, Unidad Norte, Puerto Plata.',
          instagram: '@dra.souhairaoun '
        }
      ]
    }
  }
}
</script>

<style>

</style>
