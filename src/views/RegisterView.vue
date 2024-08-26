<template>
  <div
    class="min-h-screen flex justify-center items-center flex-col gap-2">
    <div>Register view</div>
    <div class="space-x-2">
      <RouterLink to="/"
        ><button class="border px-4 py-3 bg-lime-900 text-white">
          Go Home
        </button></RouterLink
      >
      <RouterLink to="/login"
        ><button class="border px-4 py-3 bg-green-500 ">
          Go Login
        </button></RouterLink
      >
    </div>
  </div>
</template>
<script setup></script>
<style></style>
