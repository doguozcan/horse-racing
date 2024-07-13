<template>
  <button
    class="px-4 py-2 w-32 sm:w-40 rounded-full my-2 shadow-md disabled:opacity-20"
    :class="{
      'bg-green-500 hover:bg-green-700 active:bg-green-400 shadow-green-300': type === 'start',
      'bg-red-500 hover:bg-red-700 active:bg-red-400 shadow-red-300': type === 'stop',
      'bg-slate-500 hover:bg-slate-400 active:bg-slate-700 shadow-white': type === 'default'
    }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps(['type'])
</script>
