<!-- src/views/EmailSent.vue -->
<template>
  <div>
    <h1>Tasdiqlash xabari yuborildi</h1>
    <p>
      Emailingizga tasdiqlash xabari yuborildi. Iltimos, emailingizni
      tekshiring va tasdiqlash havolasini bosing.
    </p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const isVerify = localStorage.getItem("isVerify");
if (isVerify) {
  router.push("/d");
}
</script>
