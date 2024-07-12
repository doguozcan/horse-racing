<template>
  <div class="flex items-center space-x-4">
    <div
      class="flex items-center justify-center w-7 h-7 rounded-full text-slate-900 font-bold"
      :class="{
        'bg-gold': horseIndex === 0,
        'bg-silver': horseIndex === 1,
        'bg-bronze': horseIndex === 2
      }"
    >
      <p>{{ horseIndex + 1 }}</p>
    </div>
    <p>{{ horseInformation.horse.name }}</p>
    <p>Time: {{ horseInformation.time }}</p>
  </div>
</template>

<script setup>
defineProps(['horseInformation', 'horseIndex'])
</script>
