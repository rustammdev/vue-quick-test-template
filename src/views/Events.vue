<template>
    <!-- {{ event.event_name }} -->
    <!-- {{ event.desc }}  -->
    <!-- {{ _.capitalize(event.username) }} -->
    <!-- {{ event.end_data.slice(0, 15) }} -->
    <!-- Event data -->
    <section>
        <div class="container mx-auto max-w-6xl p-4">
            <h3 class="py-6 text-center text-3xl font-bold text-gray-800">
                Popular Events
            </h3>
            <div class="mt-2 gap-6 p-4 sm:p-1 md:columns-2 lg:columns-3">
                <div
                    class="mx-auto h-fit break-inside-avoid mb-2 cursor-pointer"
                    v-for="(event, index) in eventData"
                    :key="index"
                    @click="moveToEvent(event.id)"
                >
                    <div
                        class="flex flex-col w-full max-w-[520px] mx-auto leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 shadow-md"
                    >
                        <div class="flex items-center my-2">
                            <svg
                                class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                            <p
                                class="ms-2 text-sm font-bold text-gray-900 dark:text-white"
                            >
                                4.95
                            </p>
                            <span
                                class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"
                            ></span>
                            <a
                                href="#"
                                class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                                >73 questions</a
                            >
                        </div>

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
                                    >{{ event.name }}</span
                                >
                                <span
                                    class="text-sm font-normal text-gray-500 dark:text-gray-400"
                                    >{{
                                        event.job
                                            ? event.job
                                            : "Software Enginer / Google"
                                    }}</span
                                >
                            </div>
                        </div>
                        <p
                            class="text-md tracking-tight font-normal py-2.5 text-gray-900 dark:text-white"
                        >
                            {{ event.event_name }}.
                        </p>

                        <a
                            href="#"
                            class="bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500"
                        >
                            <span
                                class="text-sm font-medium text-gray-900 dark:text-white mb-2"
                                >{{ event.desc }}</span
                            >
                        </a>

                        <div
                            class="w-full flex justify-between items-center py-2"
                        >
                            <button
                                @click="moveToEvent(event.id)"
                                class="flex justify-start text-[#76FF7A] text-sm gap-x-1 items-center w-full group"
                            >
                                Send questions
                                <ArrowRight
                                    class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                            <span
                                class="text-sm font-normal w-full text-end text-gray-500 dark:text-gray-400"
                                >{{ formatDate(event.created) }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section v-if="eventData.length === 0">
        <h1>Somesingh went wrong ??</h1>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { ArrowRight } from "lucide-vue-next";
import _ from "lodash";

let response = ref({});
let eventData = ref([]);
const router = useRouter();
const moveToEvent = (id) => {
    router.push(`/events/${id}`);
};

const events = async () => {
    try {
        const res = await fetch("http://localhost:7000/api/events", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        response.value = data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

onMounted(async () => {
    await events();
    eventData.value = response.value.events;
});

const formatDate = (dateString) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB");
    } catch (error) {
        return "Invalid date";
    }
};
</script>

<style scoped></style>
