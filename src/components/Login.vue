<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Loading from "./Loading.vue";
const email = ref("");
const password = ref("");
const router = useRouter();
// Javob uchun ref
const response = ref({});
// loader uchun
const loading = ref(false);
const btnDisable = ref(true);
const isError = ref(true);

// isAuth
const isVerify = localStorage.getItem("isAuthenticated");
if (isVerify) {
  router.push("/d");
}

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
          email: email.value,
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
  if (email.value && password.value) {
    await fetchApi();
  }
};

// Watch funksiyasi bilan email va passwordni kuzatamiz
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

watch([email, password], () => {
  if (emailRegex.test(email.value) && password.value.length >= 5) {
    btnDisable.value = false;
  } else {
    btnDisable.value = true;
  }
});
</script>

<template>
  <form class="w-[90%] p-5 sm:w-[450px] m-auto shadow-xl">
    <h1
      class="text-3xl mb-2 md:text-4xl font-semibold tracking-wide text-center md:mb-2 lg:mb-9 lg:mt-2">
      Login
    </h1>
    <h1 class="text-center sm:text-lg mb-4 lg:hidden px-2">
      Revolutionize Your Event with AI-Powered Q&A
    </h1>
    <div class="space-y-3">
      <label class="flex flex-col lg:font-normal">
        <span class="text-[16px] lg:text-lg font-normal">Email</span>
        <input
          type="email"
          name="email"
          v-model="email"
          id="email"
          class="border px-3 py-2"
          placeholder="Your Email" />
      </label>
      <label class="flex flex-col">
        <span class="text-[16px] lg:text-lg font-normal"
          >Password</span
        >
        <input
          type="password"
          name="password"
          v-model="password"
          autocomplete="current-password"
          class="border px-3 py-2"
          placeholder="Password" />
      </label>
    </div>
    <div class="mt-1 h-6">
      <span class="text-red-700 text-sm py-1" v-show="isError">{{
        response.message
      }}</span>
    </div>

    <button
      class="border w-full rounded-lg px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 flex justify-center items-center md:mt-4 tracking-wide lg:text-md"
      type="button"
      @click="onSubmit"
      :disabled="loading || btnDisable">
      <Loading v-show="loading" />
      <span v-show="!loading" class="font-medium">Sign In</span>
    </button>
    <div class="mt-2 md:mt-4 flex justify-center items-center gap-1">
      <span class="text-md md:text-[16px]"
        >Don't have an account ?</span
      >
      <RouterLink
        to="/auth/register"
        class="text-md md:text-lg font-bold tracking-tight text-sky-700">
        Sign up
      </RouterLink>
    </div>
  </form>
</template>

<style>
button:disabled {
  cursor: not-allowed; /* Disable kursor */
  opacity: 0.6;
}
</style>
