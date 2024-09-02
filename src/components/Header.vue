<script setup>
import ArrowIcon from "../assets/ArrowRIght.vue";
</script>
<template>
  <header class="sticky top-0 backdrop-blur-sm z-50">
    <div
      class="flex justify-center items-center bg-black py-3 text-white gap-3">
      <p class="text-white/60 hidden md:block">
        Streamline your workflow and boost your productivity
      </p>
      <RouterLink
        to="auth/register"
        class="inline-flex gap-1 justify-center items-center group">
        <p>Get started for free</p>
        <ArrowIcon
          class="h-4 w-4 inline-flex justify-center items-center transition-transform duration-300 group-hover:translate-x-1" />
      </RouterLink>
    </div>

    <div class="p-4 max-w-screen-xl mx-auto">
      <div class="">
        <div class="flex justify-between items-center">
          <img
            src="../assets/logosaas.png"
            alt="Logo img"
            width="40"
            height="40" />
          <img
            src="../assets/menu.svg"
            alt="Menu"
            class="h-5 w-5 md:hidden" />

          <nav
            class="hidden md:flex gap-6 text-black/60 items-center">
            <a
              href="#about"
              class="hover:text-black transition-all font-medium"
              >About</a
            >
            <a
              href="#features"
              class="hover:text-black transition-all font-medium"
              >Features</a
            >

            <a
              href="#pricing"
              class="hover:text-black transition-all font-medium"
              >Pricing</a
            >
            <RouterLink
              to="/auth/login"
              class="text-md md:text-lg font-bold tracking-tight text-sky-700">
              Login
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
