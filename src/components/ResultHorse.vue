<template>
  <div class="flex flex-col items-center space-x-4">
    <div
      class="flex items-center justify-center w-8 h-8 rounded-full font-bold"
      :class="{
        'bg-gold text-black': horseIndex === 0,
        'bg-silver text-black': horseIndex === 1,
        'bg-bronze text-black': horseIndex === 2
      }"
    >
      <p>{{ horseIndex + 1 }}</p>
    </div>
    <p>{{ horseInformation.horse.name }}</p>
    <p>Time: {{ horseInformation.time }}s</p>

    <div class="flex flex-col bg-slate-700 p-2 rounded-lg my-2">
      <p>⚡ Stamina: {{ horseInformation.horse.condition }}%</p>
      <p>👌 Suitability for the race: {{ horseInformation.horse.suitability[raceIndex] }}%</p>
      <p>🧮 Total Races: {{ horseInformation.horse.totalRaces }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['horseInformation', 'horseIndex', 'raceIndex'])
</script>
