<template>
  <div class="border h-8 relative">
    <HorseAtRace :currentResultData="currentResultData" />
  </div>
</template>

<script setup>
import HorseAtRace from './HorseAtRace.vue'
defineProps(['currentResultData'])
</script>
