<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { twMerge } from "tailwind-merge";
import { computed } from "vue";
import Alert from "../../components/Alert.vue";
import { ArrowBigUp, ArrowBigDown } from "lucide-vue-next"; // ArrowBigUp va ArrowBigDown import qilinganligiga ishonch hosil qiling

const route = useRoute();
const props = defineProps({
    id: {
        type: String,
    },
    questionId: {
        type: String,
    },
    likeCount: {
        type: Number,
    },
    unlikeCount: {
        type: Number,
    },
    likedUsers: {
        type: Array,
    },
    unlikedUsers: {
        type: Array,
    },
});

const isAlert = ref(false);
const likeCount = ref(props.likeCount);
const unlikeCount = ref(props.unlikeCount);
const likedUsers = ref([...props.likedUsers]);
const unlikedUsers = ref([...props.unlikedUsers]);
const userId = ref(props.id);

const fetchApi = async (vote, id) => {
    try {
        const res = await fetch(
            `http://localhost:7000/api/question/${id}/${vote}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            },
        );
        const data = await res.json();
        if (data.authenticated == false) {
            isAlert.value = true;

            setTimeout(() => {
                isAlert.value = false;
            }, 2500);
        }
        if (data.status === "success") {
            // Yangilangan qiymatlarni to'g'ri yangilang
            likeCount.value = data.likeCount;
            unlikeCount.value = data.unlikeCount;
            likedUsers.value = data.likedUser;
            unlikedUsers.value = data.unLikedUser;
        }
    } catch (e) {
        console.log("Fetch error. ", e.message);
    }
};

const isLiked = computed(() => likedUsers.value.includes(userId.value));
const isUnliked = computed(() => unlikedUsers.value.includes(userId.value));

// like button
const like = async () => {
    await fetchApi("like", props.questionId);
};

// unlike button
const unlike = async () => {
    await fetchApi("unlike", props.questionId);
};
</script>

<template>
    <Alert :message="isAlert" />
    <div class="flex justify-between items-center">
        <button
            :disabled="true"
            class="font-medium flex cursor-not-allowed justify-center items-center gap-1 text-sm text-gray-500 hover:opacity-100 opacity-75"
        >
            Report Message
        </button>
        <div class="flex justify-end items-center gap-4 p-1">
            <div class="flex items-center gap-x-2">
                <ArrowBigUp
                    @click="like"
                    :class="
                        twMerge(
                            'inline-block w-6 h-6 md:w-7 md:h-7 fill-transparent  transition-colors duration-300 cursor-pointer',
                            isLiked && 'fill-[#22c55d]',
                        )
                    "
                />
                <span class="min-w-4 font-bold text-center text-green-800">
                    {{ likeCount }}
                </span>
                <!-- Like count -->
                <ArrowBigDown
                    @click="unlike"
                    :class="
                        twMerge(
                            'inline-block w-6 h-6 md:w-7 md:h-7 fill-transparent transition-colors duration-300 cursor-pointer',
                            isUnliked && 'fill-[#b91c1c]',
                        )
                    "
                />
                <span class="min-w-4 font-bold text-center text-red-800">{{
                    unlikeCount
                }}</span>
            </div>
            <!-- <div class="flex items-center gap-x-2"></div> -->
        </div>
    </div>
</template>
