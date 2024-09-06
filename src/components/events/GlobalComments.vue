<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ThumbsUp, ThumbsDown } from "lucide-vue-next";
import Alert from "../../components/Alert.vue";
let questions = ref({});
let questionLength = ref(0);
const route = useRoute();
const { id } = route.params;

const questionsFetch = async () => {
    try {
        const res = await fetch(
            `http://localhost:7000/api/event/${id}/questions`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            },
        );
        const data = await res.json();

        if (data.status == "success") {
            questions.value = data["questions"];
            questionLength.value = questions.value.length;
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

onMounted(async () => {
    await questionsFetch();
    console.log(questionLength.value);
});

function getTimeDifference(createdAt) {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const timeDiff = now - createdDate;

    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    if (daysDiff >= 1) {
        return `${daysDiff} day ago`;
    } else {
        const hoursRemaining = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        return `${hoursRemaining} hour ago`;
    }
}

const isAlert = ref(false);
const likeCounter = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
        isAlert.value = true;
    }

    setTimeout(() => {
        isAlert.value = false;
    }, 2000);
};
</script>

<template>
    <Alert :message="isAlert" />
    <div class="w-full p-2">
        <div class="mx-auto cursor-pointer mb-2">
            <!-- card -->
            <div v-for="(question, index) in questions" :key="question._id">
                <div
                    class="flex flex-col w-full mx-auto leading-1.5 p-8 rounded-sm shadow-md bg-[#ffffff] mb-2"
                >
                    <div>
                        <div class="flex justify-between items-center">
                            <div
                                class="flex justify-center items-center gap-x-4 ml-2"
                            >
                                <img
                                    src="https://media.licdn.com/dms/image/v2/C4E03AQFO1D7CnV-fHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1598898707219?e=2147483647&v=beta&t=9tKbCnd7FPD2Y0YbJXD9THsbm9GuHlvk1CvVMfJJYm4"
                                    alt=""
                                    class="h-10 w-10 rounded-full"
                                />
                                <div class="w-full flex flex-nowrap">
                                    <p
                                        class="text-sm text-[#0885f9] font-semibold flex-shrink-0"
                                    >
                                        {{ question.username }}
                                    </p>
                                </div>
                            </div>
                            <span
                                class="font-medium w-full text-right mb-0.5 opacity-50"
                                >{{
                                    getTimeDifference(question.createdAt)
                                }}</span
                            >
                        </div>
                        <p
                            class="text-md text-[#31424f] font-semibold pt-2 tracking-tight px-4"
                        >
                            {{ question.message }}
                        </p>
                    </div>

                    <!-- thumb -->
                    <div class="flex justify-end items-center gap-4">
                        <div class="flex gap-x-2">
                            <ThumbsUp
                                @click="likeCounter"
                                class="inline-block fill-transparent hover:fill-black transition-colors duration-300"
                            />
                            <span class="font-normal">10</span>
                        </div>
                        <div>
                            <ThumbsDown
                                @click="likeCounter"
                                class="inline-block fill-transparent hover:fill-black transition-colors duration-300"
                            />
                            <span class="sr-only">20</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fill-transparent {
    fill: transparent;
}

.hover\:fill-black:hover {
    fill: black;
}
</style>
