<template>
  <div
    class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold"
    :class="{
      'bg-gold text-black': horseIndex === 0,
      'bg-silver text-black': horseIndex === 1,
      'bg-bronze text-black': horseIndex === 2
    }"
  >
    <p>{{ horseIndex + 1 }}</p>
  </div>
</template>

<script setup>
defineProps(['horseIndex'])
</script>
