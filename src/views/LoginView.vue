<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
const email = ref("");
const password = ref("");
const router = useRouter();
// Javob uchun ref
const response = ref({});
// loader uchun
const loading = ref(false);
const btnDisable = ref(true);
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
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
watch([email, password], () => {
  const isEmailValid = emailRegex.test(email.value);
  const isPasswordValid = passwordRegex.test(password.value);
  if (isEmailValid && isPasswordValid) {
    btnDisable.value = false;
  } else {
    btnDisable.value = true;
  }
});
</script>

<template>
  <div class="min-h-screen flex justify-center items-center gap-2">
    <form class="w-full p-5">
      <h1
        class="text-2xl font-semibold tracking-wide text-center my-3">
        Hey, you are welcome!
      </h1>
      <div class="space-y-2">
        <!-- email -->
        <label class="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            class="border px-3 py-2"
            placeholder="Your Email" />
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
        class="border w-full rounded-lg px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 flex justify-center items-center mt-6 tracking-wide"
        :class="{ 'bg-red-600': true }"
        type="button"
        @click="onSubmit"
        :disabled="loading || btnDisable">
        <Loading v-show="loading" />
        <span v-show="!loading" class="font-medium">Sign in</span>
      </button>
      <div class="mt-3 flex justify-center items-center gap-1">
        <span class="text-sm">Don't have an account ?</span>
        <RouterLink
          to="/register"
          class="text-sm font-bold tracking-tight text-sky-700">
          Sign up
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<style>
button:disabled {
  cursor: not-allowed; /* Disable kursor */
  opacity: 0.6;
}
</style>
