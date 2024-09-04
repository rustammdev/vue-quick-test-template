<template>
    <div class="mt-20">
        <form class="flex flex-col gap-4 max-w-xl mx-auto">
            <label class="w-full" for="name">
                <input
                    type="text"
                    class="border px-2 py-3 w-full"
                    name="name"
                    v-model="name"
                />
            </label>
            <label for="question">
                <textarea
                    name="question"
                    class="border w-full px-2 py-3"
                    v-model="question"
                ></textarea>
            </label>
            <button
                type="button"
                class="border px-2 py-3 bg-slate-300"
                @click="onSubmit"
            >
                Send question
            </button>
        </form>
    </div>
</template>

<script setup>
import { Fuel } from "lucide-vue-next";
import { ref } from "vue";

const name = ref("");
const question = ref("");

const onSubmit = () => {
    console.log({ name: name.value, quesiton: question.value });
};
</script>
