<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const maxQuestionLength = ref(500);
const emit = defineEmits(["close"]);
const eventdata = ref("");
const close = ref(true);

const closeModal = () => {
    emit("close");
};

const submitForm = async () => {
    try {
        closeModal();
        const form = document.getElementById("eventsFormData");
        const formData = new FormData(form);
        const apiUrl = "http://localhost:7000/api/event";
        const response = await fetch(apiUrl, {
            method: "POST",
            body: formData,
            credentials: "include",
        });
        const data = await response.json();
        if (!data.authenticated) {
            router.push("/auth/login");
        }
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <div class="modal-overlay z-50 p-2" @click.self="closeModal">
        <div class="bg-white p-6 rounded-md max-w-lg w-full md:min-w-[450px]">
            <div class="flex justify-between items-center pb-2">
                <h2 class="text-xl font-bold text-center w-full">
                    Send question
                </h2>
            </div>
            <div class="bg-[#f6d32d]/50 px-3 py-2 rounded-md">
                <p class="text-center">
                    We recommend that the image size be 1920x1080.
                </p>
            </div>
            <form @submit.prevent="submitForm" id="eventsFormData">
                <div class="flex flex-col justify-start items-start py-1">
                    <div class="mt-2 flex flex-col gap-2 w-full">
                        <label
                            for="eventname"
                            class="text-[16px] font-normal text-slate-700 w-full"
                            >Event name:
                            <input
                                name="eventname"
                                autocomplete="false"
                                placeholder="Let's code together this summer."
                                type="text"
                                id="eventname"
                                require
                                class="border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        /></label>
                        <label
                            for="eventcoverimg"
                            class="text-[16px] font-normal text-slate-700 w-full"
                            >Event cover Image:
                            <input
                                autocomplete="false"
                                name="image"
                                type="file"
                                require
                                id="eventcoverimg"
                                class="border px-3 py-2 w-full disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        /></label>
                        <label
                            for="eventcoverimg"
                            class="text-[16px] font-normal text-slate-700 w-full"
                            >Event end date:
                            <input
                                autocomplete="false"
                                name="end_date"
                                type="date"
                                require
                                class="border px-3 py-2 w-full disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        /></label>
                    </div>
                </div>
                <div class="flex flex-col justify-start items-start py-2">
                    <label
                        for="question"
                        class="text-[16px] font-normal text-slate-700"
                        >Event description:</label
                    >
                    <textarea
                        v-model="eventdata"
                        name="eventdesc"
                        id="question"
                        class="max-h-[250px] border p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What are the challenges of coding in a team?"
                        :maxlength="maxQuestionLength"
                        require
                    ></textarea>
                    <p class="py-1">
                        <span class="font-normal opacity-50"> Max lenght:</span>
                        {{ eventdata.length }} /
                        {{ maxQuestionLength }}
                    </p>
                </div>

                <div
                    class="flex justify-between flex-col-reverse md:flex-row gap-2"
                >
                    <button
                        type="submit"
                        class="px-6 py-3 bg-black w-full text-white font-bold rounded-md hover:opacity-90 shadow-sm"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}
textarea {
    width: 100%;
    height: 100px;
}
</style>
