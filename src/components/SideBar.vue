<template>
  <div
    id="sidebar"
    class="bg-[#f8f9fa] text-white z-50 w-full max-h-screen max-w-xs p-4 fixed inset-y-0 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-0 desktop-sidebar">
    <!-- Top Section -->
    <div class="flex flex-col justify-between h-full p-4">
      <div>
        <div class="text-xl font-bold mt-4 relative">
          <!-- close sidebar -->
          <button
            class="lg:hidden absolute right-0 text-xl text-black rounded-sm flex justify-center items-center transition-transform duration-300 transform hover:rotate-90">
            <svg
              class="w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div
            class="flex justify-center items-center flex-col gap-2">
            <img src="../assets/logo.png" alt="logo img" />
            <span class="text-xl text-slate-950 font-semibold"
              >QuickAnswer</span
            >
          </div>
        </div>
        <p class="text-slate-800 text-sm mt-7 text-center">
          Welcome QuickAnswer,
          <span>Get productive today!</span>
        </p>

        <div class="mt-12">
          <!-- Tailwind bilan button element -->
          <!-- <div>
            <button
              class="flex flex-col justify-center w-16 h-16 items-center bg-blue-500 text-white rounded-lg shadow-md transition-all hover:outline hover:outline-2 hover:outline-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <i class="fas fa-cog text-2xl"></i>
            </button>
            <span class="text-md font-semibold text-black mt-2"
              >Settings</span
            >
          </div> -->
          <button
            class="border px-3 py-2 text-slate-900 rounded-sm flex justify-start items-center mt-3 hover:bg-slate-200 hover:transition w-full"
            type="button">
            <i class="fas fa-cog text-xl pr-4"></i>
            Settings
          </button>
        </div>
      </div>

      <!-- Setting Button -->
      <!-- <div>
        <div class="p-2 rounded w-full">
          <button
            id="CreateEventSidebarButton"
            class="bg-[#e28743] text-white px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-50">
            Create Event
          </button>
        </div>

        <div class="p-2 rounded">
          <button
            id="SendQuestionsButton"
            class="bg-[#FF5F6D] text-white px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-50">
            Send questions
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>
