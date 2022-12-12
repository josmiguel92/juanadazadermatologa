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

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <!-- person - start -->
            <div v-for="(person, index) in team" :key="index" class="p-4 lg:w-4/5 mb-10">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img class="flex-shrink-0 rounded-full w-64 h-64 object-cover object-center sm:mb-0 mb-4" loading="lazy" :src="person.image" :alt="person.name">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    {{ person.name }}
                  </h2>
                  <div class="m-4">
                    <img class="w-[3rem] h-[2rem] sm:mb-0 inline" loading="lazy" :src="person.flag" :alt="person.nationality">
                    <h3 class="text-gray-500 inline pl-2">
                      {{ person.nationality }}
                    </h3>
                  </div>
                  <p class="mb-4">
                    {{ person.bio }}
                  </p>
                  <p class="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {{ person.quote }}
                  </p>
                  <span class="inline-flex">
                    <a :href="('https://www.instagram.com/'+person.instagram)" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">

                      <svg
                        id="Flat"
                        class="w-5 h-5 inline-block"
                        width="26"
                        height="26"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <path d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z" />
                        </g>
                        <g>
                          <path d="M128,80a48,48,0,1,0,48,48A48.05436,48.05436,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32.03667,32.03667,0,0,1,128,160Z" />
                          <path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28Zm40,144a40.04521,40.04521,0,0,1-40,40H84a40.04521,40.04521,0,0,1-40-40V84A40.04521,40.04521,0,0,1,84,44h88a40.04521,40.04521,0,0,1,40,40Z" />
                          <circle cx="180" cy="76" r="12" />
                        </g>
                      </svg>
                      @{{ person.instagram }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- person - end -->
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
          image: '/img/team/juanadaza.jpg',
          bio: 'Especialista en dermatología clínica, quirúrgica y estética de la Universidad de Ciencias Médicas De La Habana. Egresada de medicina general en la universidad Metropolitana de Barranquilla-Colombia, redactora de contenidos de salud, cuidado de la piel y anexos cutáneos. Busco ofrecer atención personalizada de acuerdo a la condición de la piel y anexos cutáneos de cada persona para conseguir un excelente tratamiento y óptimos resultados.',
          quote: 'Recuerda: ¡cuando tu cuerpo no puede más, tu piel habla!',
          instagram: 'dra.juanatdazavergara',
          flag: '/img/colombia.jpg',
          nationality: 'Colombiana'
        },
        {
          name: 'Dra. Souhair Aoun Ortiz',
          image: '/img/team/susu.jpg',
          bio: 'Hola, me llamo Souhair Aoun Ortiz, Soy Dominico-Libanesa, Dermatóloga Clínico Quirúrgico y Estético de profesión y vocación, Soy egresada de la Universidad de Ciencias Médicas de la Habana, realicé mis estudios de Grado en la Universidad Tecnológica de Santiago, en República Dominicana, actualmente Me encuentro laborando en Centro Médico Dr. Bournigal e Instituto Dermatológico y Cirugía de piel, Unidad Norte, Puerto Plata.',
          quote: 'Haz que tu piel sea el reflejo de tu alma',
          instagram: 'dra.souhairaoun ',
          flag: '/img/dominicana.jpg',
          nationality: 'Dominico-Libanesa'
        },
        {
          name: 'Dra. Gina G. Valladares Quiñonez',
          image: '/img/team/gina.jpg',
          bio: 'Médico egresada de la Universidad Católica de Honduras, Reciente de tercer año del servicio de Dermatología clínica en el hospital clínico quirúrgico Miguel Enríquez de la Habana. Cuba. Redactor de contenidos de salud y cuidado de la piel. ',
          quote: 'La piel es tu mejor carta de presentación',
          instagram: 'dra.souhairaoun ',
          flag: '/img/honduras.jpg',
          nationality: 'Hondureña'
        }
      ]
    }
  }
}
</script>

<style>

</style>
