<template>
  <div>
    <h1>Verify Your Email</h1>
    <p v-if="loading">Loading...</p>
    <p v-else-if="verificationStatus === 'success'">
      Verification successful!
    </p>
    <p v-else-if="verificationStatus === 'error'">
      Verification failed. Please try again later.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const token = route.params.token;
const loading = ref(true);
const verificationStatus = ref(null);
const response = ref({});
const isVerify = localStorage.getItem("isVerify");
if (isVerify) {
  router.push("/d");
}

onMounted(async () => {
  try {
    const res = await fetch(
      `http://localhost:7000/api/verify/${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    response.value = await res.json();
    if (response.value.status === "success") {
      localStorage.setItem("isVerify", true);
      verificationStatus.value = "success";
      router.push("/d");
    } else {
      verificationStatus.value = "error";
    }
  } catch (error) {
    verificationStatus.value = "error";
    console.error("Verification error:", error);
  } finally {
    loading.value = false;
    console.log(response.value);
  }
});
</script>

<style scoped>
/* Qo'shimcha stil qo'shing */
</style>
