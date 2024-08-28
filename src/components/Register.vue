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
  <div class="container">
    <form class="w-[90%] p-5 sm:w-[450px] m-auto shadow-xl">
      <h1
        class="text-3xl md:text-4xl font-semibold tracking-wide text-center my-3">
        Create account
      </h1>
      <h1 class="text-center sm:text-lg mb-4 lg:hidden px-2">
        Revolutionize Your Event with AI-Powered Q&A
      </h1>
      <div class="space-y-3">
        <!-- name -->
        <label class="flex flex-col lg:font-normal">
          <span class="text-[16px] lg:text-lg font-normal"
            >Firsname</span
          >
          <input
            type="text"
            name="firstname"
            v-model="name"
            autocomplete="firstname"
            class="border px-3 py-2 rounded-lg"
            placeholder="Firsname" />
        </label>

        <!-- email -->
        <label class="flex flex-col">
          <span class="text-[16px] lg:text-lg font-normal"
            >Email</span
          >
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            autocomplete="email"
            :class="{ 'border-red-400': isEmailnameValid }"
            class="border px-3 py-2 rounded-lg"
            placeholder="Email" />
        </label>

        <!-- password -->
        <label class="flex flex-col">
          <span class="text-[16px] lg:text-lg font-normal"
            >Password</span
          >
          <input
            type="password"
            name="password"
            id="password"
            autocomplete="current-password"
            v-model="password"
            class="border px-3 py-2 rounded-lg"
            placeholder="Password" />
        </label>
      </div>
      <div class="mt-1 h-6">
        <span class="text-red-700 text-sm py-1" v-show="isError">{{
          response.message
        }}</span>
      </div>

      <button
        class="border w-full rounded-lg px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 flex justify-center items-center mt-4 tracking-wide lg:text-md"
        type="button"
        @click="onSubmit"
        :disabled="loading || btnDisable">
        <LoadingVue v-show="loading" />
        <span v-show="!loading" class="font-medium">Sign Up</span>
      </button>
      <div class="m-5 flex justify-center items-center gap-1">
        <span class="text-md md:text-[16px]"
          >Alredy have a account?</span
        >
        <RouterLink
          to="/auth/login"
          class="text-md md:text-lg font-bold tracking-tight text-sky-700">
          Login
        </RouterLink>
      </div>
    </form>
  </div>
</template>
