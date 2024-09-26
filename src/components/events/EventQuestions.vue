<template>
    <section class="py-4 md:px-4 bg-[#e9eef5]">
        <Modal
            v-if="showModal"
            @close="showModal = false"
            @submit="handleButtonClick"
        />
        <div
            class="flex flex-col lg:flex-row lg:justify-between gap-4 lg:h-full max-w-[1500px] mx-auto"
        >
            <!-- left section -->
            <div>
                <h1 class="w-full text-center font-bold text-2xl mt-12">
                    Global Questions
                </h1>
                <p
                    class="font-normal text-md max-w-xl w-[95%] md:w-[80%] mx-auto mb-6 text-slate-800 opacity-80 tracking-tight text-center"
                >
                    Siz savollarni faqatgini tadbir tugash vaqtigacha yo'llay
                    olasiz.
                </p>
                <div class="mx-auto mb-2 px-4 md:px-8 lg:px-0">
                    <div
                        class="flex flex-col w-full max-w-[520px] mx-auto leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 shadow-md"
                    >
                        <img
                            :src="eventData.imageUrl"
                            alt="image cover"
                            class="max-h-[300px] object-cover"
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
                                    >Event creator</span
                                >
                                <!-- <span
                                    class="text-sm font-normal text-gray-500 dark:text-gray-400"
                                    >{{
                                        eventData.job
                                            ? eventData.job
                                            : "Software Enginer / Google"
                                    }}</span
                                > -->
                            </div>
                        </div>
                        <p
                            class="text-md tracking-tight font-normal py-2.5 px-3 text-gray-900 dark:text-white"
                        >
                            {{ eventData.event_name }}.
                        </p>

                        <div
                            class="bg-gray-50 dark:bg-gray-600 rounded-sm p-4 mb-2 max-h-[200px] overflow-y-auto"
                        >
                            <span
                                class="text-sm font-medium text-gray-900 dark:text-white mb-2 h-[100px]"
                            >
                                <b>FAANG</b>: 2 O'zbek Hikoyasi | Vohid Karimov
                                va Azimjon Pulatov <br /><br />🎯 Suhbat
                                <a href="https://t.me/vovopapcom" class="link"
                                    >Vohid Karimov</a
                                >va
                                <a
                                    href="https://t.me/lazyprogrammer"
                                    class="link"
                                    >Azimjon Pulatovning</a
                                >
                                Google'gacha bo'lgan yo'li va tajribalari haqida
                                bo'ladi. <br /><br />📆 6-aprel, 16:00, Toshkent
                                vaqti.
                            </span>
                        </div>

                        <div
                            class="w-full flex justify-between items-center py-2"
                        >
                            <span
                                class="text-sm font-normal w-full text-gray-500 dark:text-gray-400"
                                >Created:
                                {{ formatDate(eventData.created) }}</span
                            >
                            <span
                                class="text-sm font-normal w-full text-end text-gray-500 dark:text-gray-400"
                                >End date:
                                {{ formatDate2(eventData.end_data) }}</span
                            >
                        </div>
                        <button
                            type="button"
                            @click="showModal = true"
                            :disabled="isDisabled"
                            class="px-6 py-3 bg-[#1971c2] text-white font-bold rounded-md hover:opacity-90 shadow-sm"
                        >
                            {{
                                isDisabled
                                    ? `Wait ${timer} seconds`
                                    : "Send question"
                            }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- right secction -->
            <div
                class="w-full lg:w-[70%] max-w-[900px] mx-auto lg:overflow-scroll scrollable-menu px-2"
            >
                <GlobalQuestions />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import GlobalQuestions from "./GlobalComments.vue";
import FormSendQuestion from "./FormSendQuestion.vue";
import Modal from "./FormSendQuestion.vue";
import Alert from "../Alert.vue";

import { ArrowRight } from "lucide-vue-next";

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

const formatDate2 = (dateString) => {
    try {
        const date = new Date(dateString);
        if (isNaN(date)) throw new Error("Invalid date");

        const options = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        return date.toLocaleDateString("en-GB", options);
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
// modal send question
const showModal = ref(false);

const isDisabled = ref(false);
const timer = ref(900);
const intervalId = ref(null);
const endTime = ref(null);

const startTimer = () => {
    intervalId.value = setInterval(() => {
        if (timer.value > 0) {
            timer.value--;
        } else {
            clearInterval(intervalId.value);
            isDisabled.value = false;
            timer.value = 900;
            localStorage.removeItem("buttonEndTime" + id); // Timer tugagandan so'ng ma'lumotni o'chiramiz
        }
    }, 1000);
};

const handleButtonClick = () => {
    isDisabled.value = true;
    const currentTime = new Date();
    endTime.value = new Date(currentTime.getTime() + timer.value * 1000); // 15 daqiqa hisoblash
    localStorage.setItem("buttonEndTime" + id, endTime.value); // Saqlaymiz
    startTimer();
};

onMounted(() => {
    // Sahifa yuklanganda localStorage'ni tekshiramiz
    const storedEndTime = localStorage.getItem("buttonEndTime" + id);
    if (storedEndTime) {
        const remainingTime = Math.floor(
            (new Date(storedEndTime) - new Date()) / 1000,
        );
        if (remainingTime > 0) {
            isDisabled.value = true;
            timer.value = remainingTime;
            startTimer();
        }
    }
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
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #6b7280 #e3e3e3;
}
/* Webkit (Chrome, Safari) uchun scrollbarni sozlash */
.scrollable-menu::-webkit-scrollbar {
    width: 8px;
}
.scrollable-menu::-webkit-scrollbar-track {
    background: #1f2937;
}
.scrollable-menu::-webkit-scrollbar-thumb {
    background-color: #e3e3e3;
    border-radius: 10px;
    border: 3px solid #1f2937;
}
</style>
