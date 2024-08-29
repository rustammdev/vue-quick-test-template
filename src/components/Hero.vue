<script setup>
import ArrawRight from "../assets/ArrowRIght.vue";
</script>

<template>
  <section
    class="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left, #183EC2, #EAEEEFE_66%)">
    <div class="container px-4">
      <div>
        <div
          class="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
          Version 2.0 here
        </div>
        <h1
          class="text-3xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
          Revolutionize Your Event with AI-Powered Q&A
        </h1>
        <p
          class="text-lg font-medium tracking-tight text-[#010d3e]/80 mt-3">
          Our AI-powered platform automates the process of answering
          zing providing fast, accurate answers.
        </p>
        <div class="flex gap-1 items-center mt-[30px]">
          <button
            class="bg-black text-white px-4 py-2 font-medium rounded-lg tracking-tight inline-flex items-center justify-center">
            Get for free
          </button>
          <button class="flex justify-center items-center gap-1 ml-2">
            <span class="font-medium tracking-tight">Learn more</span>
            <ArrawRight class="h-4 w-4" />
          </button>
        </div>
      </div>
      <div class="mt-20">
        <img src="../assets/cog.png" alt="Cog img" />
      </div>
    </div>
  </section>
</template>
