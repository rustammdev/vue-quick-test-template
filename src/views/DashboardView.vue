<template>
  <div class="min-h-screen flex justify-center items-center gap-2">
    <div>Dashboard view</div>
    <RouterLink to="/"
      ><button class="border px-4 py-3 bg-lime-900 text-white">
        Go Home
      </button></RouterLink
    >
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted } from "vue";
onMounted(async () => {
  const res = await axios
    .get("http://localhost:7000/api/event", { withCredentials: true })
    .then((res) => console.log(res.data));
});
</script>
<style></style>
