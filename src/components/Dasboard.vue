<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <!-- {{>sidebar}} -->
    <SidebarView />

    <!-- Main Content -->
    <div
      class="flex-1 p-4 sm:px-6 lg:px-12 xl:px-24 h-screen overflow-y-auto bg-[#ffffff] text-black">
      <div class="flex justify-end gap-2 items-center" id="delcilp">
        <!-- {{>alert}}
        {{>clipboar}} -->
        <button
          id="deleteEvent"
          data-content="0"
          class="delete-btn bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors duration-300">
          Delete Event
        </button>
      </div>
      <div class="flex justify-between items-center mt-6">
        <div class="border px-4 pl-2 flex gap-2">
          General questions: <span id="questionCount">0</span>
        </div>
        <button
          id="openSidebar"
          class="lg:hidden bg-gray-300 p-2 m-2 rounded-full">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Data section -->
      <div id="EventQuestions" class="">
        <!-- {{! Questions }} -->
        <section class="grid grid-cols-1">
          <h1
            class="text-lg font-bold text-center m-4 hidden"
            id=""></h1>
          <ul
            id="eventsListContainer"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4"></ul>
        </section>
      </div>

      <!-- {{! Default content dashboard }} -->
      <div
        id="pustoylist"
        class="relative hidden top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-lg">
        <h1>No one has posted a question yet.</h1>
      </div>

      <!-- {{! Default content dashboard }} -->
      <div
        id="DefaultDataDashboard"
        class="relative top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-lg">
        <h1>No data available at this time.</h1>
        <h2>
          One of the available events to get information about the
          event
          <span class="underline">select from the left panel.</span>.
        </h2>
      </div>
      <!-- {{>createEvent}}
    {{>sendquestions}} -->
    </div>
    <!--main content end-->
  </div>
</template>

<script setup>
import SidebarView from "./SideBar.vue";
</script>
<style></style>
