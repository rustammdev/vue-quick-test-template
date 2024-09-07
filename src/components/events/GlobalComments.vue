<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import LikeCounterThumbs from "./LikeCounter.vue";
let questions = ref([]);
let questionLength = ref(0);
const route = useRoute();
const { id } = route.params;
const userId = ref("");

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
        console.log(data);
        if (data.status == "success") {
            userId.value = data.userId;
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
</script>

<template>
    <div class="w-full p-2">
        <div class="mx-auto mb-2">
            <!-- card -->
            <div
                v-for="(question, index) in questions"
                :key="question._id"
                class="relative"
            >
                <div class="relative">
                    <span
                        class="font-medium text-sm text-gray-500 absolute top-5 right-6 opacity-75"
                    >
                        {{ getTimeDifference(question.createdAt) }}
                    </span>
                </div>

                <div
                    class="flex flex-col w-full mx-auto leading-1.5 p-8 rounded-sm shadow-md bg-[#ffffff] mb-2"
                >
                    <div>
                        <div
                            class="flex flex-col w-full justify-center items-start gap-x-4"
                        >
                            <div class="flex justify-center items-center gap-4">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/C4E03AQFO1D7CnV-fHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1598898707219?e=2147483647&v=beta&t=9tKbCnd7FPD2Y0YbJXD9THsbm9GuHlvk1CvVMfJJYm4"
                                    alt=""
                                    class="h-10 w-10 rounded-full"
                                />
                                <p
                                    class="text-sm text-[#0885f9] font-semibold flex-shrink-0"
                                >
                                    {{ question.username }}
                                </p>
                            </div>
                            <div
                                class="w-full flex justify-start gap-2 items-center mt-2"
                            >
                                <p
                                    class="text-md text-[#31424f] font-semibold tracking-tight"
                                >
                                    {{ question.message }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- thumb -->
                    <LikeCounterThumbs
                        :id="userId"
                        :questionId="question._id"
                        :likeCount="question.likeCount"
                        :unlikeCount="question.unlikeCount"
                        :likedUsers="question.likedUsers"
                        :unlikedUsers="question.unLikedUsers"
                    />
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
