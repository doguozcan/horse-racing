<template>
  <div class="bg-slate-700 rounded-xl w-full p-2 mt-2">
    <p>⚡Condition: {{ horseInformation.horse.condition }}%</p>
    <p>👌Suitability for the race: {{ horseInformation.horse.suitability[raceIndex] }}%</p>
    <p>🧮Total Races: {{ horseInformation.horse.totalRaces }}</p>
  </div>
</template>

<script setup>
defineProps(['horseInformation', 'raceIndex'])
</script>
