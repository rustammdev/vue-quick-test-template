<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
const username = ref("");
const password = ref("");
const router = useRouter();
// Javob uchun ref
const response = ref({});
// loader uchun
const loading = ref(false);
const isError = ref(false);

// API dan ma'lumot olish uchun funksiya
const fetchApi = async () => {
  try {
    loading.value = true;
    const responseData = await fetch(
      "http://localhost:7000/v2/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
        credentials: "include",
      }
    );
    response.value = await responseData.json();

    if (response.value.status == "success") {
      router.push("/d");
    } else {
      isError.value = true;
    }
  } catch (error) {
    response.value = { error: error.message };
  } finally {
    loading.value = false;
  }
};

// Formani yuborish uchun funksiya
const onSubmit = async () => {
  if (username.value && password.value) {
    await fetchApi();
  }
};
</script>

<template>
  <div class="min-h-screen flex justify-center items-center gap-2">
    <div>Login view</div>
    <div class="space-x-2">
      <RouterLink to="/"
        ><button class="border px-4 py-3 bg-lime-900 text-white">
          Go Home
        </button></RouterLink
      >
      <RouterLink to="/register"
        ><button class="border px-4 py-3 bg-orange-500">
          Go Register
        </button></RouterLink
      >
    </div>
    <form
      class="border-2 text-slate-800 px-6 rounded-lg py-4 flex flex-col w-[350px]">
      <div class="space-y-2">
        <!-- username -->
        <label class="flex flex-col">
          Username
          <input
            type="text"
            name="username"
            v-model="username"
            id="username"
            autocomplete="off"
            class="border px-3 py-2"
            placeholder="Username" />
        </label>

        <!-- password -->
        <label class="flex flex-col">
          Password
          <input
            type="password"
            name="password"
            v-model="password"
            id="password"
            class="border px-3 py-2"
            placeholder="Password" />
        </label>
      </div>
      <span class="text-red-700 text-sm py-1" v-show="isError">{{
        // (response.message) ? response.message : response.message[0].msg;
        response.message
      }}</span>

      <button
        class="border px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-sm flex justify-center items-center mt-3"
        type="button"
        @click="onSubmit"
        :disabled="loading">
        <Loading v-show="loading" />
        <span v-show="!loading">Let's start</span>
      </button>
    </form>
  </div>
</template>

<style></style>
