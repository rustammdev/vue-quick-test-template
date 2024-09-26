<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { v4 as uuidv4 } from "uuid";
import { io } from "socket.io-client";
const route = useRoute();
const { id } = route.params;

const emit = defineEmits(["close", "submit"]);
const username = ref("");
const question = ref("");
const extralink = ref("");
const isChecked = ref(false);
const maxQuestionLength = ref(200);
const isUserExist = ref(
    localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData"))
        : false,
);

const userSocketId = uuidv4();
localStorage.setItem("userSocketId", userSocketId);
const socketIo = io("http://localhost:7000", {
    path: "/api/socket.io",
});
socketIo.on("connect", () => {
    console.log("Front-end: You connected to the server");
    socketIo.emit("userId", userSocketId);
});

const closeModal = () => {
    emit("close");
};

const onSubmit = () => {
    emit("submit");
};

const fetchApi = async (params) => {
    try {
        const res = await fetch(
            `http://localhost:7000/api/event/${id}/questions`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(params),
            },
        );
        const data = await res.json();
    } catch (e) {
        console.error("Fetch error", e.message);
    }
};

let questionData = {};
const submitForm = async () => {
    if (question.value.length <= maxQuestionLength.value) {
        if (isUserExist.value?.username) {
            questionData = {
                event_id: id,
                socketId: userSocketId,
                user_id: isUserExist.value.id,
                username: isUserExist.value.username,
                message: question.value,
            };
        } else {
            questionData = {
                event_id: id,
                socketId: userSocketId,
                username: username.value,
                message: question.value,
                extralink: extralink.value,
            };
        }
        await fetchApi(questionData);
        closeModal();
    } else {
        alert(`Savol ${maxQuestionLength.value} ta belgidan oshmasligi kerak.`);
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
            <div
                v-show="!isUserExist"
                class="bg-[#f6d32d]/50 px-3 py-2 rounded-md"
            >
                <p>
                    Unregistered users are required to provide a contact link.
                    If necessary, the event organizer may use this link to reach
                    out to you.
                </p>
            </div>
            <form @submit.prevent="submitForm" id="usersFormData">
                <div class="flex flex-col justify-start items-start py-1">
                    <!-- user register -->
                    <p
                        v-show="isUserExist"
                        class="font-normal flex justify-center items-center gap-2"
                    >
                        Your username:
                        <span
                            class="text-sm text-[#0885f9] font-semibold cursor-pointer"
                        >
                            @{{ isUserExist.username }}
                        </span>
                    </p>

                    <div v-show="!isUserExist" class="mt-2 flex gap-2 w-full">
                        <!-- user not register -->
                        <label
                            for="username"
                            class="text-[16px] font-normal text-slate-700 w-full"
                            >Name:
                            <input
                                name="username"
                                v-model="username"
                                autocomplete="false"
                                placeholder="John Dou"
                                type="text"
                                id="username"
                                class="border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                :required="!isUserExist"
                        /></label>
                        <div class="w-full">
                            <label
                                for="extralink"
                                class="text-[16px] font-normal text-slate-700 w-full"
                                >Extra link:
                                <input
                                    v-model="extralink"
                                    autocomplete="false"
                                    name="extralink"
                                    type="text"
                                    :disabled="isChecked"
                                    placeholder="https://t.me/john_dou"
                                    id="extralink"
                                    class="border px-3 py-2 w-full disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    :required="!(isChecked || isUserExist)"
                            /></label>
                            <label
                                for="check"
                                class="cursor-pointer flex gap-3 py-2 w-fit"
                                ><input
                                    type="checkbox"
                                    id="check"
                                    v-model="isChecked"
                                />Don't contact me.</label
                            >
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-start items-start py-2">
                    <label
                        for="question"
                        class="text-[16px] font-normal text-slate-700"
                        >Your questions:</label
                    >
                    <textarea
                        v-model="question"
                        name="questions"
                        id="question"
                        class="max-h-[250px] border p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What are the challenges of coding in a team?"
                        :maxlength="maxQuestionLength"
                        required
                    ></textarea>
                    <p class="py-1">
                        <span class="font-normal opacity-50"> Max lenght:</span>
                        {{ question.length }} /
                        {{ maxQuestionLength }}
                    </p>
                </div>

                <div
                    class="flex justify-between flex-col-reverse md:flex-row gap-2"
                >
                    <button
                        type="button"
                        @click="closeModal"
                        class="px-6 py-3 border border-black w-full text-black font-bold rounded-lg hover:border-[#1971c2] shadow-sm"
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        @click="onSubmit"
                        :disabled="question.length < 5"
                        class="px-6 py-3 bg-black w-full text-white font-bold rounded-md hover:opacity-90 shadow-sm"
                    >
                        Send
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
