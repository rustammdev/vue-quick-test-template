<script setup>
import { ChevronRight } from "lucide-vue-next";
</script>

<template>
    <section class="h-screen flex items-center w-full">
        <div class="flex flex-col justify-center items-center w-full">
            <img src="../assets/wrong.png" alt="wrong image" class="h-36" />
            <div class="w-[80%] md:w-[60%] xl:w-[40%] my-3">
                <h1 class="text-4xl font-bold text-center">
                    Something went wrong
                </h1>
                <p class="text-lg font-normal text-center py-1 tracking-tight">
                    There is some error, we will fix it soon. Sometimes
                    <span class="font-bold text-green-600">refreshing</span> the
                    page fixes the problem. If it doesn't work, try again later.
                </p>
            </div>
            <RouterLink
                to="/"
                class="px-3 py-2 flex justify-center items-center text-[#1971c2] font-bold"
            >
                Go to home page <ChevronRight class="h-4" />
            </RouterLink>
        </div>
    </section>
</template>
