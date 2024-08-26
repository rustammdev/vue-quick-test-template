<template>
  <div class="min-h-screen flex justify-center items-center flex-col gap-2">
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
  </div>
</template>
<script setup></script>
<style></style>
