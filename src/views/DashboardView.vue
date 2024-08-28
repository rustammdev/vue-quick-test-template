<template>
  <TestView />
</template>
<script setup>
import LogOut from "../components/LogOut.vue";
import TestView from "../components/Dasboard.vue";

import axios from "axios";
import { onMounted } from "vue";
onMounted(async () => {
  const res = await axios
    .get("http://localhost:7000/api/event", { withCredentials: true })
    .then((res) => console.log(res.data));
});
</script>
<style></style>
