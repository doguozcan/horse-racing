<template>
  <div class="flex flex-col items-center space-x-4 bg-slate-600 p-5 m-5 rounded-lg">
    <HorseRanking :horseIndex="horseIndex" />
    <PTag>{{ horseInformation.horse.name }}</PTag>
    <PTag>Time: {{ horseInformation.time }}s</PTag>
    <HorseInformationAfterRace :horseInformation="horseInformation" :raceIndex="raceIndex" />
  </div>
</template>

<script setup>
import HorseRanking from './HorseRanking.vue'
import PTag from '../common/PTag.vue'
import HorseInformationAfterRace from './HorseInformationAfterRace.vue'

defineProps(['horseInformation', 'horseIndex', 'raceIndex'])
</script>
