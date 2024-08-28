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
        Fullname
        <input
          type="text"
          name="fullname"
          id="fullname"
          v-model="name"
          autocomplete="off"
          class="border px-3 py-2"
          placeholder="Name" />
      </label>

      <!-- username -->
      <label class="flex flex-col">
        Username
        <input
          type="text"
          name="username"
          id="username"
          v-model="username"
          autocomplete="off"
          class="border px-3 py-2"
          placeholder="Username" />
      </label>

      <!-- email -->
      <label class="flex flex-col">
        Email
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
          autocomplete="off"
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
const username = ref("");
const password = ref("");
const email = ref("");
// loader uchun
const loading = ref(false);
const isError = ref(false);
const response = ref({});
const router = useRouter();

// Token mavjud bo'lsa, dashboardga yo'naltirish

// API dan ma'lumot olish uchun funksiya
const fetchApi = async () => {
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
          fullname: name.value,
          username: username.value,
          email: email.value,
          password: password.value,
        }),
        credentials: "include",
      }
    );
    response.value = await responseData.json();

    if (response.value.status == "success") {
      router.push("/verify");
    } else {
      isError.value = true;
    }
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
<style></style>
