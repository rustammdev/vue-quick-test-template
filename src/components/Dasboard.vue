<template>
  <div class="flex h-screen">
    <SidebarView />

    <!-- Main Content -->
    <div
      class="flex-1 p-4 sm:px-6 lg:px-12 xl:px-24 h-screen overflow-y-auto bg-[#ffffff] text-black">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SidebarView from "./SideBar.vue";
</script>
<style scoped>
* {
  border: 1px solid red;
}
</style>
