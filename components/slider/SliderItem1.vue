<template>
  <section class="text-gray-600 body-font h-screen w-screen bg-accent relative">
    <div class="absolute w-full h-screen">
      <video class=" w-full h-full object-cover object-center brightness-75" autoplay loop muted>
        <source src="/video/output_h265.mp4" type="video/mp4; codecs=hevc">
        <source src="/video/output.webm" type="video/webm; codecs=vp9">

        <img src="/img/jtd.jpg" class=" w-full h-full object-cover object-center brightness-75">
      </video>
    </div>

    <div class="container px-12 py-36 mx-auto flex h-screen relative animate__fadeInUp animate__animated">
      <div class="lg:w-2/3 flex flex-col items-start justify-end  mx-auto">
        <h1 class="sm:pr-16 text-3xl md:text-4xl font-medium title-font text-white leading-snug">
          <span class="font-extrabold text-5xl md:text-6xl">¡Prepárate para la mejor </span><br>
          experiencia y entendimiento de enfermedades, <br>
          procedimientos y cuidados de la piel!
        </h1>
      </div>
    </div>
  </section>
</template>
