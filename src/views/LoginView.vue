<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
const identifier = ref("");
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
      "http://localhost:7000/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: identifier.value,
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
  if (identifier.value && password.value) {
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
      <h1 class="font-bold text-xl tracking-wide text-center my-3">
        Hey, you are welcome!
      </h1>
      <div class="space-y-2">
        <!-- identifier -->
        <label class="flex flex-col">
          Username or Email
          <input
            type="email"
            name="identifier"
            v-model="identifier"
            id="identifier"
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
            autocomplete="current-password" 
            class="border px-3 py-2"
            placeholder="Password" />
        </label>
      </div>
      <span class="text-red-700 text-sm py-1" v-show="isError">{{
        response.message
      }}</span>

      <button
        class="border px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-sm flex justify-center items-center mt-3"
        type="button"
        @click="onSubmit"
        :disabled="loading">
        <Loading v-show="loading" />
        <span v-show="!loading">Sign in</span>
      </button>
      <RouterLink to="/register">
        <span
          class="border px-3 py-2 bg-white text-slate-900 rounded-sm flex justify-center items-center mt-3 hover:bg-slate-200 hover:transition"
          >Don't have an account ?</span
        >
      </RouterLink>
    </form>
  </div>
</template>

<style></style>
