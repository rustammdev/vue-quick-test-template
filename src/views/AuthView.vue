<template>
  <div class="min-h-screen flex justify-center items-center gap-2">
    <div class="md:flex w-full md:items-center md:justify-center">
      <div
        class="hidden bg-[#698474] lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-start lg:px-6 gap-4">
        <h1 class="text-3xl lg:text-4xl font-normal bg-white p-2">
          Revolutionize Your Event with AI-Powered Q&A
        </h1>
      </div>
      <div
        class="w-full md:flex md:justify-center md:items-center md:h-screen">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>
<script setup>
import LoginForm from "../components/Login.vue";
import RegisterForm from "../components/Register.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const currentComponent = computed(() => {
  return route.name === "login" ? LoginForm : RegisterForm;
});
</script>
<style></style>
