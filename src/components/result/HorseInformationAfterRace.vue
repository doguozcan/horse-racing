<template>
  <div
    class="bg-slate-700 rounded-xl w-full p-2 mt-2 text-center hover:scale-95 duration-100 hover:bg-slate-800"
  >
    <p>⚡Condition: {{ horseInformation.horse.condition }}%</p>
    <p>👌Suitability: {{ horseInformation.horse.suitability[raceIndex] }}%</p>
    <p>🧮Total Races: {{ horseInformation.horse.totalRaces }}</p>
  </div>
</template>

<script setup>
defineProps(['horseInformation', 'raceIndex'])
</script>
