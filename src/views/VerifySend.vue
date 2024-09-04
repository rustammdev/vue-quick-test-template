<!-- src/views/EmailSent.vue -->
<template>
    <div
        class="h-screen flex flex-col justify-center items-center px-4 text-center"
    >
        <MailSearch class="mb-2" />
        <div>
            <h1 class="font-bold text-xl">
                A confirmation message has been sended
            </h1>
            <p class="font-normal py-2">
                Check your email and click on the confirmation link.
            </p>
        </div>
    </div>
</template>

<script setup>
import { io } from "socket.io-client";
import { MailSearch } from "lucide-vue-next";
import { useRouter } from "vue-router";
const router = useRouter();
const isVerify = localStorage.getItem("isVerify");
if (isVerify) {
    router.push("/dashboard");
}

// socked
const socket = io("http://localhost:7000", {
    path: "/api/socket.io",
});

socket.on("emailVerified", (data) => {
    if (data.success) {
        localStorage.setItem("isVerify", true);
        // Email tasdiqlangach, cookie yangilash uchun so'rov yuboriladi
        fetch("http://localhost:7000/api/update-cookie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include", // Cookie'larni yuborish uchun
        })
            .then((response) => response.json())
            .then((data) => {
                router.push("/dashboard");
            });
    }
});

socket.on("connect", () => {
    console.log("Front-end: You connected to the server");
});
</script>
