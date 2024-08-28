<template>
  <div class="min-h-screen flex justify-center items-center gap-2">
    <div>Register view</div>
    <div class="space-x-2">
      <RouterLink to="/"
        ><button class="border px-4 py-3 bg-lime-900 text-white">
          Go Home
        </button></RouterLink
      >
      <RouterLink to="/login"
        ><button class="border px-4 py-3 bg-green-500">
          Go Login
        </button></RouterLink
      >
    </div>
    <form
      class="border-2 text-slate-800 px-6 rounded-lg py-4 flex flex-col w-[350px] gap-y-3">
      <!-- name -->
      <label class="flex flex-col">
        Firstname
        <input
          type="text"
          name="firstname"
          v-model="name"
          autocomplete="firstname"
          class="border px-3 py-2"
          placeholder="firstname" />
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
      <span class="text-red-700 text-sm py-1" v-show="isError">{{
        response.message
      }}</span>

      <button
        class="border px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-sm flex justify-center items-center mt-3"
        type="button"
        @click="onSubmit"
        :disabled="loading">
        <LoadingVue v-show="loading" />
        <span v-show="!loading">Sign un</span>
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoadingVue from "../components/Loading.vue";

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
</script>
