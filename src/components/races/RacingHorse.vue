<template>
  <div class="border h-8 relative">
    <HorseAtRace :currentResultData="currentResultData" :currentPixel="currentPixel" />
  </div>
</template>

<script setup>
import HorseAtRace from './HorseAtRace.vue'
defineProps(['currentResultData', 'currentPixel'])
</script>
