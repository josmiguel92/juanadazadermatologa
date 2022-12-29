<template>
  <div class="pt-4 sm:pt-10 lg:pt-12" style="background-image: url(/img/disease-page-background.png);">
    <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto" >
      <div class="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6">
        <!-- nav - start -->
        <nav class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
          <a
            v-for="(item, index) in menuItems"
            :key="index"
            :href="item.path"
            :aria-label="item.name"
            :title="item.name"
            class="text-white hover:text-primary active:text-primary transition duration-100"
          >{{ item.name }}</a>
        </nav>
        <!-- nav - end -->

        <!-- social - start -->
        <div class="flex gap-4">
          <a href="https://www.instagram.com/dra.juanatdazavergara" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg
              class="w-5 h-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

        </div>
        <!-- social - end -->
      </div>

      <div class="text-gray-400 text-sm text-center py-8">
        © 2022 - Juana T. Daza Vergara. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
  },
  data () {
    return {
      menuItems: [
        { name: 'Quiénes somos', path: '/about' },
        { name: 'Servicios', path: '/' },
        // { name: 'Misión y Visión', path: '/' },
        { name: 'Informes de Salud', path: '/' },
        { name: 'Tienda dermatológica', path: '/store' },
        { name: 'Contácto', path: '/' }

      ]
    }
  }
}
</script>
