<template>
  <div
    class="flex items-center gap-1 sm:gap-2 md:gap-3 bg-slate-600 shadow-inner shadow-slate-400 hover:bg-slate-800 duration-75 m-2 p-2 rounded-lg hover:cursor-default hover:scale-105"
  >
    <div
      class="flex justify-center items-center w-6 h-6 bg-slate-400 shadow-inner shadow-slate-200 rounded-full md:w-8 md:h-8"
    >
      {{ position }}
    </div>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
defineProps(['name', 'position'])
</script>
