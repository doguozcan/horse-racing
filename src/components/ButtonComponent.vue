<template>
  <button
    class="text-white px-4 py-2 rounded-full my-2 shadow-lg"
    :class="{
      'bg-green-500 hover:bg-green-700 active:bg-green-400 shadow-green-700': type == 'start',
      'bg-red-500 hover:bg-red-700 active:bg-red-400 shadow-red-700': type == 'stop',
      'bg-amber-500 hover:bg-amber-700 active:bg-amber-400 shadow-amber-700': type === 'yes'
    }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps(['type'])
</script>
