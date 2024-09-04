<template>
    <!-- <section class="p-4" v-if="isShow">
        <table
            class="w-full max-w-5xl mx-auto text-sm text-left text-gray-500 mt-16 border"
        >
            <thead class="text-lg text-gray-700 uppercase bg-gray-50">
                <tr class="border-b">
                    <th class="px-4 py-3 font-medium">Created by</th>
                    <th class="px-4 py-3 font-medium">Event name</th>
                    <th class="px-4 py-3 font-medium">Description</th>
                    <th class="px-4 py-3 font-medium">End Date</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b hover:bg-slate-200 cursor-pointer">
                    <td class="px-4 py-3 font-medium text-gray-900">
                        {{ _.capitalize(eventData.username) }}
                    </td>
                    <td class="px-4 py-3 font-medium text-gray-900">
                        {{ eventData.event_name }}
                    </td>
                    <td class="px-4 py-3">{{ eventData.desc }}</td>
                    <td class="px-4 py-3">
                        {{ formatDate(eventData.end_data) }}
                    </td>
                </tr>
            </tbody>
        </table>
        <FormSendQuestion />
    </section> -->

    <section class="p-4"></section>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import FormSendQuestion from "./FormSendQuestion.vue";
import { MessageCircle } from "lucide-vue-next";
import _ from "lodash";
const route = useRoute();
const { id } = route.params;
let eventData = ref({});
const isShow = ref(false);

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

        if (data.status == "success") {
            eventData.value = data["event"];
            isShow.value = true;
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

// onMounted(async () => {
//     await events();
// });
</script>
