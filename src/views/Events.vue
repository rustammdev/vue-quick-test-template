<template>
    <!-- {{ event.event_name }} -->
    <!-- {{ event.desc }}  -->
    <!-- {{ _.capitalize(event.username) }} -->
    <!-- {{ event.end_data.slice(0, 15) }} -->
    <!-- Event data -->
    <section>
        <div class="container mx-auto max-w-6xl p-4">
            <h3 class="py-6 text-center text-3xl font-bold text-gray-800">
                Popular Tweets
            </h3>
            <div class="mt-2 gap-6 p-4 sm:p-1 md:columns-2 lg:columns-3">
                <div
                    class="mx-auto border h-fit break-inside-avoid mb-2"
                    v-for="(data, index) in cardData"
                    :key="index"
                >
                    <div
                        class="flex flex-col w-full max-w-[520px] mx-auto leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
                    >
                        <div
                            class="flex items-center space-x-2 rtl:space-x-reverse"
                        >
                            <img
                                class="w-14 h-14 md:w-16 md:h-16 rounded-full"
                                src="https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13"
                                alt="Jese image"
                            />
                            <div class="flex flex-col">
                                <span
                                    class="text-sm font-semibold text-gray-900 dark:text-white"
                                    >Bonnie Green</span
                                >
                                <span
                                    class="text-sm font-normal text-gray-500 dark:text-gray-400"
                                    >Software Enginer / Google</span
                                >
                            </div>
                        </div>
                        <p
                            class="text-md tracking-tight font-normal py-2.5 text-gray-900 dark:text-white"
                        >
                            {{ data.title }}
                        </p>

                        <a
                            href="#"
                            class="bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500"
                        >
                            <span
                                class="text-sm font-medium text-gray-900 dark:text-white mb-2"
                                >GitHub - themesberg/flowbite: The most popular
                                and open source library. <br />
                                <br />
                                To learn more, check out the documentation on
                                Responsive Design, Dark Mode and other media
                                query modifiers.</span
                            >
                        </a>

                        <div
                            class="w-full flex justify-between items-center py-2"
                        >
                            <button
                                @click="moveToEvent"
                                class="flex justify-start text-[#76FF7A] text-sm gap-x-1 items-center w-full"
                            >
                                Send questions <ArrowRight class="h-4 w-4" />
                            </button>
                            <span
                                class="text-sm font-normal w-full text-end text-gray-500 dark:text-gray-400"
                                >10/10/2024</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

let cardData = [
    {
        avatar: "https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13",
        name: "Bonnie Green",
        job: "Software Enginer / Google",
        title: "That's awesome. I think our users will really appreciate the improvements.",
        deck: "GitHub - themesberg/flowbite: The most popular and open         source library.  To learn more, check out the documentation on esponsive  Design, Dark Mode and other ",
        data: "10/10/2024",
    },
    {
        avatar: "https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13",
        name: "Bonnie Green",
        job: "Software Enginer / Google",
        title: "That's awesome. I think our users will really appreciate the improvements.",
        deck: "GitHub - themesberg/flowbite: The most popular and open         source library.  To learn more, check out the documentation on esponsive  Design, Dark Mode and other ",
        date: "10/10/2024",
    },
    {
        avatar: "https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13",
        name: "Bonnie Green",
        job: "Software Enginer / Google",
        title: "That's awesome. I think our users will really appreciate the improvements.",
        deck: "GitHub - themesberg/flowbite: The most popular and open         source library.  To learn more, check out the documentation on esponsive  Design, Dark Mode and other ",
        data: "10/10/2024",
    },
    {
        avatar: "https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13",
        name: "Bonnie Green",
        job: "Software Enginer / Google",
        title: "That's awesome. I think our users will really appreciate the improvements.",
        deck: "GitHub - themesberg/flowbite: The most popular and open         source library.  To learn more, check out the documentation on esponsive  Design, Dark Mode and other ",
        data: "10/10/2024",
    },
    {
        avatar: "https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13",
        name: "Bonnie Green",
        job: "Software Enginer / Google",
        title: "That's awesome. I think our users will really appreciate the improvements.That's awesome. I think our users will really appreciate the improvementThat's awesome. I think our users will really appreciate the improvementThat's awesome. I think our users will really appreciate the improvementThat's awesome. I think our users will really appreciate the improvement",
        deck: "GitHub - themesberg/flowbite: The most popular and open         source library.  To learn more, check out the documentation on esponsive  Design, Dark Mode and other ",
        data: "10/10/2024",
    },
    {
        avatar: "https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13",
        name: "Bonnie Green",
        job: "Software Enginer / Google",
        title: "That's awesome. I think our users will really appreciate the improvements.",
        deck: "GitHub - themesberg/flowbite: The most popular and open         source library.  To learn more, check out the documentation on esponsive  Design, Dark Mode and other ",
        data: "10/10/2024",
    },
    {
        avatar: "https://avatars.mds.yandex.net/i?id=a025fa5a0d325a5b71f275e0c47575575314111dd70a5b44-12421086-images-thumbs&n=13",
        name: "Bonnie Green",
        job: "Software Enginer / Google",
        title: "That's awesome. I think our users will really appreciate the improvements.",
        deck: "GitHub - themesberg/flowbite: The most popular and open         source library.  To learn more, check out the documentation on esponsive  Design, Dark Mode and other ",
        data: "10/10/2024",
    },
];
</script>

<style scoped></style>
