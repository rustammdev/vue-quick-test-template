<template>
    <div class="h-screen flex flex-col justify-center items-center">
        <MailWarning class="m-2" v-if="verificationStatus === 'error'" />
        <MailCheck v-if="verificationStatus === 'success'" class="m-2" />
        <MailSearch v-if="loading" class="m-2" />

        <h1 class="font-bold text-2xl">Verify Your Email</h1>
        <div
            v-if="loading"
            class="mt-4 flex flex-col justify-center items-center gap-2"
        >
            <p>Your email is being verified</p>
            <LoadingVue />
        </div>
        <p
            v-else-if="verificationStatus === 'success'"
            class="font-medium mt-4 border border-green-300 px-3 py-4"
        >
            Verification successful!
        </p>
        <div v-else-if="verificationStatus === 'error'">
            <p class="text-red-700 font-normal mt-2">
                Verification failed. Please try again later.
            </p>
            <button
                @click="verifyEmail"
                class="px-4 py-2 rounded-md w-full mt-1 bg-black text-green-400 font-medium"
            >
                Reset code
            </button>
        </div>
    </div>
</template>

<script setup>
import { MailWarning } from "lucide-vue-next";
import { MailSearch } from "lucide-vue-next";
import { MailCheck } from "lucide-vue-next";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import LoadingVue from "../components/Loading.vue";

const router = useRouter();
const route = useRoute();
const token = route.params.token;

const loading = ref(false);
const verificationStatus = ref(null);
const sockedId = localStorage.getItem("userSockedId");
const response = ref({});
const isAuthenticated = localStorage.getItem("isAuthenticated");
if (isAuthenticated) {
    router.push("/dashboard");
}

const verifyEmail = async () => {
    try {
        loading.value = true;
        verificationStatus.value = null;
        const res = await fetch(`http://localhost:7000/api/verify/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ id: sockedId }),
        });

        response.value = await res.json();
        if (response.value.status === "success") {
            localStorage.setItem(
                "userData",
                JSON.stringify(response.value.userData),
            );
            localStorage.setItem("isVerify", true);
            verificationStatus.value = "success";
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
};
onMounted(verifyEmail);
</script>

<style scoped>
/* Qo'shimcha stil qo'shing */
</style>
