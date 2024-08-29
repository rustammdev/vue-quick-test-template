<script setup>
import ArrowIcon from "../assets/ArrowRIght.vue";
</script>
<template>
  <header class="sticky top-0 backdrop-blur-sm">
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

    <div class="p-5">
      <div class="container border-2">
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
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Updates</a>
            <a href="#">Pricing</a>
            <button
              class="bg-black text-white px-4 py-2 font-medium rounded-lg tracking-tight inline-flex items-center justify-center">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
