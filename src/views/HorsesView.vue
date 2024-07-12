<template>
  <div class="flex flex-col items-center">
    <GreetUser />
    <HorseGrid v-if="$store.getters.horsesLength > 0" />
    <GenerateHorses v-if="$store.getters.horsesLength === 0" />
  </div>
</template>

<script setup>
import GreetUser from '../components/GreetUser.vue'
import HorseGrid from '../components/HorseGrid.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
</script>
