<!-- src/views/EmailSent.vue -->
<template>
  <div
    class="h-screen flex flex-col justify-center items-center px-4 text-center">
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
import { v4 as uuidv4 } from "uuid";

// const isVerify = localStorage.getItem("isVerify");
// if (isVerify) {
//   router.push("/dashboard");
// }

const sockedIo = io("http://localhost:7000", {
  path: "/api/socket.io",
});

const userSockedId = uuidv4();
localStorage.setItem("userSockedId", userSockedId);
sockedIo.on("connect", () => {
  console.log("Front-end: You connected to the server");
  sockedIo.emit("userId", userSockedId);
});

sockedIo.on("email-verify", (data) => {
  console.log(data);
  if (data.success) {
    localStorage.setItem("isVerify", true);
    localStorage.setItem("userData", JSON.stringify(data.token));
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
        if (data.status == "success") {
          router.push("/dashboard");
        } else {
          console.error(data);
        }
      });
  }
});
</script>
