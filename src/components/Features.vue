<script setup>
const features = [
  {
    title: "Collecting and Filtering Questions",
    description:
      "Questions are analyzed by AI and grouped by similarities in meaning. In this process, unnecessary words, insults, and repetitive questions are reduced by automatic filtering..",
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
  <section class="pt-24 pb-20">
    <div class="container mx-auto max-w-6xl px-6 lg:px-0">
      <h2
        class="text-center font-bold text-3xl md:text-[50px] md:leading-[60px] tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 w-[80%] mx-auto lg:w-full lg:text-6xl">
        Features
      </h2>
      <p
        class="text-center text-[18px] lg:text-[20px] leading-[22px] tracking-tight text-[#010D3E]/80 mt-4 w-[80%] mx-auto font-medium max-w-lg">
        Familiarize yourself with the features and capabilities of the
        project.
      </p>

      <div
        class="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 mt-10">
        <figure
          v-for="(feature, index) in features"
          :key="index"
          class="flex flex-col justify-start text-center bg-white border-b md:border-e p-4 md:p-6 lg:p-8 cursor-pointer">
          <blockquote class="max-w-2xl">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ feature.title }}
            </h3>
            <p class="mt-2 lg:text-[18px]">
              {{ feature.description }}
            </p>
          </blockquote>
        </figure>
      </div>
    </div>
  </section>
</template>
<style></style>
