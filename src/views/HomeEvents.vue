<template>
    <section class="py-12">
        <div class="p-4 w-full md:mx-auto md:max-w-[1300px]">
            <h3 class="py-6 text-center text-3xl font-bold text-gray-800">
                Popular Events
            </h3>
            <div
                class="mt-2 sm:p-1 flex overflow-x-auto w-full scroll-container space-x-6 py-4"
            >
                <div
                    class="w-full h-fit cursor-pointer"
                    v-for="(event, index) in eventData"
                    :key="index"
                    @click="moveToEvent(event.id)"
                >
                    <div
                        class="flex flex-col w-[420px] mx-auto leading-1.5 p-4 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
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
                            <span
                                class="text-sm font-normal w-full text-end text-gray-500 dark:text-gray-400"
                                >Posted {{ formatDate(event.created) }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <h3
                class="py-6 text-center text-lg font-bold text-gray-800 flex justify-center items-center gap-8"
            >
                Sroll right
                <div class="flex gap-2">
                    <ArrowRight class="h-8" /><ArrowRight class="h-8" />
                </div>
            </h3>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import SomesingWrong from "../components/WentWrong.vue";
import {
    ArrowRight,
    ChevronRight,
    MessageCircle,
    EllipsisVertical,
} from "lucide-vue-next";
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
        console.log(data);
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

<style scoped>
.br {
    border: 1px solid red;
}

.scroll-container::-webkit-scrollbar {
    display: none;
}

/* Firefox uchun */
.scroll-container {
    scrollbar-width: none; /* Yashiradi */
}
</style>
