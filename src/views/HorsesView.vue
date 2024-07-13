<template>
  <HorseGrid v-if="$store.getters.horsesLength > 0" />
  <GenerateHorses v-if="$store.getters.horsesLength === 0" />
</template>

<script setup>
import HorseGrid from '../components/HorseGrid.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
</script>
