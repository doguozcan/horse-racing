<template>
  <div class="flex flex-col items-center">
    <HorsesGreeting />
    <HorseGrid v-if="$store.getters.horsesLength > 0" />
    <GenerateHorses v-if="$store.getters.horsesLength === 0" />
  </div>
</template>

<script setup>
import HorsesGreeting from '../components/HorsesGreeting.vue'
import HorseGrid from '../components/HorseGrid.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
</script>
