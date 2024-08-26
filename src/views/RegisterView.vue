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

      <button
        class="border px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-sm"
        type="button"
        @click="onSubmit">
        Let's start
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const name = ref("");
const username = ref("");
const password = ref("");

const onSubmit = () => {
  console.log({
    name: name.value,
    username: username.value,
    password: password.value,
  });
};
</script>
<style></style>
