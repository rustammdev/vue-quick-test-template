<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import LoadingVue from "./Loading.vue";

const name = ref("");
const password = ref("");
const email = ref("");
const isEmailnameValid = ref(false);
// loader uchun
const loading = ref(false);
const isError = ref(false);
const response = ref({});
const router = useRouter();

// Redirect /verify
const moveToVerify = (param) => {
  param == "success"
    ? router.push("/verify")
    : (isError.value = true);
};

// API dan ma'lumot olish uchun funksiya
const fetchApi = async () => {
  isEmailnameValid.value = false;
  try {
    loading.value = true;
    const responseData = await fetch(
      "http://localhost:7000/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: name.value,
          email: email.value,
          password: password.value,
        }),
        credentials: "include",
      }
    );
    response.value = await responseData.json();
    response.value.email ? (isEmailnameValid.value = true) : "";

    moveToVerify(response.value.status);
  } catch (error) {
    response.value = { error: error.message };
  } finally {
    loading.value = false;
  }
};
const onSubmit = async () => {
  await fetchApi();
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const btnDisable = ref(true);
watch([email, password, name], () => {
  if (
    emailRegex.test(email.value) &&
    password.value.length >= 5 &&
    name.value.length > 5
  ) {
    btnDisable.value = false;
  } else {
    btnDisable.value = true;
  }
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center gap-2">
    <div class="container">
      <h1
        class="text-2xl md:text-4xl font-semibold tracking-wide text-center my-3">
        Create account
      </h1>
      <form class="w-full p-5 space-y-2">
        <!-- name -->
        <label class="flex flex-col">
          Firsname
          <input
            type="text"
            name="firstname"
            v-model="name"
            autocomplete="firstname"
            class="border px-3 py-2"
            placeholder="Firsname" />
        </label>

        <!-- email -->
        <label class="flex flex-col">
          Email
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            autocomplete="email"
            :class="{ 'border-red-400': isEmailnameValid }"
            class="border px-3 py-2"
            placeholder="Email" />
        </label>

        <!-- password -->
        <label class="flex flex-col">
          Password
          <input
            type="password"
            name="password"
            id="password"
            autocomplete="current-password"
            v-model="password"
            class="border px-3 py-2"
            placeholder="Password" />
        </label>
        <div class="mt-1 h-6">
          <span class="text-red-700 text-sm py-1" v-show="isError">{{
            response.message
          }}</span>
        </div>

        <button
          class="border w-full rounded-lg px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 flex justify-center items-center tracking-wide"
          type="button"
          @click="onSubmit"
          :disabled="loading || btnDisable">
          <LoadingVue v-show="loading" />
          <span v-show="!loading">Sign Up</span>
        </button>
        <div class="mt-3 flex justify-center items-center gap-1">
          <span class="text-sm">Alredy have a account?</span>
          <RouterLink
            to="/auth/login"
            class="text-sm font-bold tracking-tight text-sky-700">
            Login
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>
