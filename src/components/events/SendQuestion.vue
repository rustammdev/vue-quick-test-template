<template>
    <section class="lg:h-screen py-20 px-4 bg-[#e9eef5]">
        <div
            class="flex flex-col lg:flex-row lg:justify-between gap-4 lg:h-full mt-20 max-w-[1500px] mx-auto"
        >
            <!-- right section -->
            <div class="h-full">
                <div class="mx-auto mb-2">
                    <div
                        class="flex flex-col w-full max-w-[520px] mx-auto leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 shadow-md"
                    >
                        <img
                            src="https://i.ytimg.com/vi/Br7vChhusX8/maxresdefault.jpg"
                            alt=""
                        />
                        <div
                            class="flex items-center space-x-2 rtl:space-x-reverse mt-2"
                        >
                            <img
                                src="https://media.licdn.com/dms/image/v2/C4E03AQFO1D7CnV-fHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1598898707219?e=2147483647&v=beta&t=9tKbCnd7FPD2Y0YbJXD9THsbm9GuHlvk1CvVMfJJYm4"
                                alt=""
                                class="h-12 w-12 rounded-full"
                            />
                            <div class="flex flex-col mt-1">
                                <span
                                    class="text-sm font-semibold text-gray-900 dark:text-white"
                                    >{{ eventData.name }}</span
                                >
                                <span
                                    class="text-sm font-normal text-gray-500 dark:text-gray-400"
                                    >{{
                                        eventData.job
                                            ? eventData.job
                                            : "Software Enginer / Google"
                                    }}</span
                                >
                            </div>
                        </div>
                        <p
                            class="text-md tracking-tight font-normal py-2.5 px-3 text-gray-900 dark:text-white"
                        >
                            {{ eventData.event_name }}.
                        </p>

                        <a
                            href="#"
                            class="bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2"
                        >
                            <span
                                class="text-sm font-medium text-gray-900 dark:text-white mb-2"
                            >
                                <b>FAANG</b>: 2 O'zbek Hikoyasi | Vohid Karimov
                                va Azimjon Pulatov <br /><br />🎯 Suhbat
                                <a href="https://t.me/vovopapcom" class="link"
                                    >Vohid Karimov</a
                                >
                                va
                                <a
                                    href="https://t.me/lazyprogrammer"
                                    class="link"
                                    >Azimjon Pulatovning</a
                                >
                                Google'gacha bo'lgan yo'li va tajribalari haqida
                                bo'ladi. <br /><br />📆 6-aprel, 16:00, Toshkent
                                vaqti
                            </span>
                        </a>

                        <div
                            class="w-full flex justify-between items-center py-2"
                        >
                            <span
                                class="text-sm font-normal w-full text-end text-gray-500 dark:text-gray-400"
                                >{{ formatDate(eventData.created) }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- Left secction -->
            <div
                class="w-full lg:w-[70%] max-w-[900px] mx-auto lg:overflow-scroll scrollable-menu px-2"
            >
                <GlobalQuestions />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import GlobalQuestions from "./GlobalComments.vue";
import { ArrowRight } from "lucide-vue-next";
import Alert from "../Alert.vue";
const route = useRoute();
const { id } = route.params;
let eventData = ref({});

const formatDate = (dateString) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB");
    } catch (error) {
        return "Invalid date";
    }
};

const events = async () => {
    try {
        const res = await fetch(`http://localhost:7000/api/events/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        eventData.value = data["event"];
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

onMounted(async () => {
    await events();
});
</script>

<style setup>
@media (max-width: 1025px) {
    body {
        overflow-y: auto;
    }
}

.link {
    color: white;
    font-weight: 500;
    text-decoration: underline;
}

.scrollable-menu {
    max-height: 100%; /* Siz xohlagan maksimal balandlikni qo'shing */
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin; /* Firefox uchun yupqa scrollbar */
    scrollbar-color: #6b7280 #1f2937; /* Firefox uchun scrollbar ranglari */
}
/* Webkit (Chrome, Safari) uchun scrollbarni sozlash */
.scrollable-menu::-webkit-scrollbar {
    width: 8px;
}
.scrollable-menu::-webkit-scrollbar-track {
    background: #1f2937;
}
.scrollable-menu::-webkit-scrollbar-thumb {
    background-color: #6b7280;
    border-radius: 10px;
    border: 3px solid #1f2937;
}
</style>
