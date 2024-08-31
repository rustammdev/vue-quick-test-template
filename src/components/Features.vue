<script setup>
const features = [
  {
    title: "Collecting and Filtering Questions",
    description:
      "Questions are analyzed by AI and grouped by similarities in meaning. In this process, unnecessary words, insults, and repetitive questions are reduced by automatic filtering.",
  },
  {
    title: "Event Management",
    description:
      "Users can add other users as moderators to events they create. Moderators can view questions posted to events. It is possible to view questions submitted to a single event from multiple devices.",
  },
  {
    title: "Filtering abusive  and repeated questions",
    description:
      "The project has a mechanism for automatically filtering offensive expressions and similar questions, which significantly reduces the time of viewing and answering questions.",
  },
  {
    title: "Send questions",
    description:
      "You do not need to register to post questions. However, unregistered users will not be able to contact event creators.",
  },
];
</script>

<template>
  <section class="pt-24 px-4 pb-[100px] gradient">
    <div class="md:container mx-auto lg:px-0">
      <div class="flex flex-col justify-start">
        <h2
          class="text-center font-bold text-3xl md:text-[50px] md:leading-[60px] tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 w-[80%] mx-auto lg:w-full lg:text-6xl">
          Features
        </h2>
        <p
          class="md:w-full text-[18px] lg:text-[20px] leading-[22px] tracking-tight text-[#010D3E]/80 mt-4 w-[90%] text-center mx-auto font-medium max-w-lg ">
          Familiarize yourself with the features and capabilities of
          the project.
        </p>
      </div>

      <figure class="flex flex-wrap gap-6 justify-center mt-10">
        <!-- card -->
        <blockquote
          v-for="(feature, index) in features"
          :key="index"
          class="relative bg-white p-6 max-w-xs flex-none w-full md:w-1/2 rounded-lg">
          <!-- <div
            class="absolute inset-0  rounded-lg flex items-center justify-center"></div> -->

          <h3 class="font-medium text-lg mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-base">
            {{ feature.description }}
          </p>
        </blockquote>
      </figure>
    </div>
  </section>
</template>
<style setup>
.gradient {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(160, 157, 215, 0.604) 0%,
    rgba(11, 96, 208, 0.559) 100%
  );
}
</style>
