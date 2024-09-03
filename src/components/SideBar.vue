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

        <div class="mt-12 flex flex-col">
          <RouterLink
            to="/d"
            class="text-md md:text-lg font-bold tracking-tight text-sky-700">
            Dashboard
          </RouterLink>
          <RouterLink
            to="/d/s"
            class="text-md md:text-lg font-bold tracking-tight text-sky-700">
            Settings
          </RouterLink>
          <RouterLink
            to="/d/e"
            class="text-md md:text-lg font-bold tracking-tight text-sky-700">
            Events
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
