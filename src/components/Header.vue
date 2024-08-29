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
      <div class="inline-flex gap-1 justify-center items-center">
        <p>Get started for free</p>
        <ArrowIcon
          class="h-4 w-4 inline-flex justify-center items-center" />
      </div>
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
            <a href="#" class="hover:text-black transition-all font-medium">About</a>
            <a href="#" class="hover:text-black transition-all font-medium">Features</a>
            <a href="#" class="hover:text-black transition-all font-medium">Updates</a>
            <a href="#" class="hover:text-black transition-all font-medium">Pricing</a>
            <button
              class="bg-black hover:bg-slate-900 text-white px-4 py-2 font-medium rounded-lg tracking-tight inline-flex items-center justify-center">
              Let's find Event
            </button>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
