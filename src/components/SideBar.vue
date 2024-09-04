<script setup>
import {
    HousePlug,
    Settings,
    CalendarCheck2,
    EllipsisVertical,
    Send,
} from "lucide-vue-next";
</script>

<template>
    <div
        id="sidebar"
        class="bg-[#f8f9fa] text-white z-50 w-full max-h-screen max-w-xs p-4 fixed inset-y-0 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-0 desktop-sidebar"
    >
        <div class="flex flex-col h-full p-4">
            <div class="flex flex-col justify-start items-start h-full">
                <div class="text-xl font-bold mt-4 relative">
                    <button
                        class="lg:hidden absolute right-0 text-xl text-black rounded-sm flex justify-center items-center transition-transform duration-300 transform hover:rotate-90"
                    >
                        <svg
                            class="w-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <div class="flex justify-center items-start flex-col gap-2">
                        <span class="text-xl text-slate-950 font-semibold"
                            >QuickAnswer</span
                        >
                    </div>
                    <p class="text-slate-800 text-sm mt-7 text-start">
                        Welcome QuickAnswer,
                        <span>Get productive today!</span>
                    </p>
                </div>

                <div class="mt-12 flex flex-col w-full">
                    <RouterLink
                        to="/dashboard"
                        class="text-md md:text-lg font-bold tracking-tight text-black flex gap-x-6 px-2 py-3 hover:bg-slate-200 focus::bg-slate-200 rounded-md"
                        pl-2
                        pl-3
                    >
                        <HousePlug />
                        Dashboard
                    </RouterLink>
                    <RouterLink
                        to="/dashboard/events"
                        class="text-md md:text-lg font-bold tracking-tight text-black flex gap-x-6 px-2 py-3 hover:bg-slate-200 rounded-md focus::bg-slate-200 pl-3"
                    >
                        <CalendarCheck2 />
                        Events
                    </RouterLink>
                    <RouterLink
                        to="/events"
                        class="text-md md:text-lg font-bold tracking-tight text-black flex gap-x-6 px-2 py-3 hover:bg-slate-200 rounded-md focus::bg-slate-200 pl-3"
                    >
                        <Send />
                        Send questions
                    </RouterLink>
                    <RouterLink
                        to="/dashboard/settings"
                        class="text-md md:text-lg font-bold tracking-tight text-black flex gap-x-6 px-2 py-3 hover:bg-slate-200 rounded-md focus::bg-slate-200 pl-3"
                        pl-2
                        pl-3
                    >
                        <Settings />
                        Settings
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
