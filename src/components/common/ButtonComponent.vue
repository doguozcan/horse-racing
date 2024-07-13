<template>
  <button
    class="px-4 py-2 w-32 sm:w-40 rounded-full my-2 shadow-md shadow-white disabled:opacity-20 bg-slate-500 hover:bg-slate-400 active:bg-slate-700"
    :class="{
      'bg-green-500 hover:bg-green-700 active:bg-green-400 shadow-green-700': type == 'start',
      'bg-red-500 hover:bg-red-700 active:bg-red-400 shadow-red-700': type == 'stop'
    }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps(['type'])
</script>
