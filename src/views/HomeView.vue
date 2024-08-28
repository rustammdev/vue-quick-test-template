<template>
  <div class="flex min-h-screen justify-center items-center gap-4">
    <h1>Home page</h1>
    <div>
      <RouterLink
        to="/auth/login"
        class="border px-4 py-3 bg-blue-500">
        Go Login
      </RouterLink>
      <RouterLink
        to="/auth/register"
        class="border px-4 py-3 bg-blue-400">
        Go Register
      </RouterLink>
      <RouterLink to="/d" class="border px-4 py-3 bg-orange-400"
        >Go Dashboard</RouterLink
      >
    </div>
  </div>
</template>
<script setup>
// const isAuthenticated =
//   localStorage.getItem("isAuthenticated") === "true";
//   v-show="!isAuthenticated"
</script>
<style></style>
