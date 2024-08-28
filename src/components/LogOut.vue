<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
const router = useRouter();
// Javob uchun ref
const response = ref({});
// loader uchun
const loading = ref(false);

// API dan ma'lumot olish uchun funksiya
const fetchApi = async () => {
  try {
    loading.value = true;
    const responseData = await fetch(
      "http://localhost:7000/api/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    response.value = await responseData.json();

    if (response.value.status == "success") {
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

// Formani yuborish uchun funksiya
const onSubmit = async () => {
  await fetchApi();
};
</script>

<template>
  <button
    class="border px-4 py-3 bg-red-600 font-semibold text-slate-100 hover:bg-red-700 rounded-sm flex justify-center items-center"
    type="button"
    @click="onSubmit"
    :disabled="loading">
    <Loading v-show="loading" />
    <span v-show="!loading">Logout</span>
  </button>
</template>

<style></style>
