<template>
  <div class="bg-primary py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Ponte en contacto
        </h2>

        <p class="max-w-screen-md text-gray-800 md:text-lg text-center mx-auto">
          Dejanos saber tus inquietudes y escribenos!
          Ademas si te suscribes te enviaremos mensualmente datos sobre el cuidado de la piel, cabello, uñas y ofertas sobre consultas y procedimientos dermatologicos y cosmeticos.
        </p>
      </div>
      <!-- text - end -->

      <!-- form - start -->
      <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
        <div>
          <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Nombre*</label>
          <input name="first-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-primary rounded outline-none transition duration-100 px-3 py-2">
        </div>

        <div class="">
          <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
          <input name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-primary rounded outline-none transition duration-100 px-3 py-2">
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Mensaje*</label>
          <textarea name="message" class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-primary rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div class="sm:col-span-2 flex justify-between items-center">
          <button class="inline-block bg-secondary hover:bg-secondary active:bg-accent focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Enviar
          </button>

          <span class="text-gray-500 text-sm">*Requerido</span>
        </div>

        <p class="text-gray-400 text-xs">
          Al darte de alta en nuestro boletín, estas aceptando nuestra <a href="#" class="hover:text-secondary active:text-secondary underline transition duration-100">Política de Privacidad</a>.
        </p>
      </form>
    <!-- form - end -->
    </div>
  </div>
</template>
