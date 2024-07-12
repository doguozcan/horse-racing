<template>
  <!-- display the active element of the navbar with a lighter color -->
  <div
    class="m-2 py-2 rounded-lg text-center sm:m-6 sm:px-6 sm:py-3 hover:bg-slate-600 active:bg-slate-400 duration-150"
    :class="{
      'bg-slate-800': $route.path !== navBarItem.path,
      'bg-slate-400 shadow-md shadow-white': $route.path === navBarItem.path
    }"
  >
    {{ navBarItem.label }}
  </div>
</template>

<script setup>
defineProps(['navBarItem'])
</script>
