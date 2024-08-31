<script setup>
import ArrawRight from "../assets/ArrowRIght.vue";
</script>

<template>
  <section class="pt-8 pb-20 bg-gradient overflow-x-clip">
    <div class="max-w-screen-xl mx-auto">
      <div class="md:flex md:items-center min-lg:px-4">
        <div class="md:w-[70%] lg:w-[50%] p-2 md:px-6">
          <div class="flex justify-center md:justify-start">
            <div
              class="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 here
            </div>
          </div>
          <h1
            class="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text pt-6 text-center md:text-left">
            Revolutionize Your Event with AI-Powered Q&A
          </h1>
          <p
            class="text-lg md:text-xl font-medium tracking-tight text-[#010d3e]/80 mt-3 text-center md:text-left">
            Our AI-powered platform automates the process of answering
            zing providing fast, accurate answers.
          </p>
          <div
            class="flex gap-1 justify-center md:justify-start items-center mt-[30px]">
            <button
              class="bg-black hover:bg-black/80 text-white px-3 py-2 font-medium rounded-lg tracking-tight inline-flex items-center justify-center">
              Get for free
            </button>
            <button
              class="flex justify-center items-center gap-1 ml-2">
              <span class="font-medium tracking-tight"
                >Learn more</span
              >
              <ArrawRight class="h-4 w-4" />
            </button>
          </div>
        </div>

        <!-- right section -->
        <div class="mt-20 md:mt-0 md:flex-1 md:h-[648px] relative">
          <img
            src="../assets/cog.png"
            alt="Cog img"
            class="md:absolute md:h-full md:max-w-none md:-left-12 lg:left-12 lg:right-0" />

          <img
            src="../assets/cylinder.png"
            alt="Clyinder image"
            class="hidden md:block md:absolute -top-14 -left-24 w-52" />

          <img
            src="../assets/noodle.png"
            alt="Noodle pn"
            class="hidden lg:block absolute top-[584px] -left-[550px] w-60 rotate-12" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-gradient {
  background: radial-gradient(
    ellipse 200% 100% at bottom left,
    #394368,
    #eaeeef
  );
}
</style>
