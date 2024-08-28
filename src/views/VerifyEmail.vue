<script setup>
import { ref } from "vue";
import LoadingVue from "../components/Loading.vue";
import { useRouter } from "vue-router";

const verify = ref();
const response = ref({});
const loading = ref(false);
const router = useRouter();

const fetchApi = async () => {
  try {
    loading.value = true;
    const responseData = await fetch(
      "http://localhost:7000/api/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          verify: verify.value,
        }),
        credentials: "include",
      }
    );
    
    response.value = await responseData.json();
    console.log(response.value);

    if (response.value.status == "success") {
      router.push("/d");
      console.log(response.value);
    }
  } catch (error) {
    response.value = { error: error.message };
  } finally {
    loading.value = false;
  }
};

const onSubmit = async () => {
  await fetchApi();
  console.log(verify.value);
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <form class="border bg-slate-300 px-3 py-4 rounded-sm max-w-min">
      <!-- username -->
      <label class="flex flex-col text-center gap-2">
        Verify email.
        <input
          type="text"
          name="verify"
          v-model="verify"
          autocomplete="off"
          class="border px-3 py-2 text-center" />
      </label>
      <button
        class="border w-full px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-sm flex justify-center items-center mt-3"
        type="button"
        @click="onSubmit">
        <!-- Button bosilganda submit -->
        <LoadingVue v-show="loading" />

        <span v-show="!loading">Verify</span>
      </button>
    </form>
  </div>
</template>
