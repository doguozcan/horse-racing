<template>
  <GenerateHorses />
  <GenerateProgram />
  <StartRace />
  <RaceTrack v-if="$store.getters.programLength !== 0 && 1 == 2" />
</template>

<script setup>
import GenerateHorses from '../components/horse/GenerateHorses.vue'
import GenerateProgram from '../components/program/GenerateProgram.vue'
import StartRace from '../components/races/StartRace.vue'
import RaceTrack from '../components/RaceTrack.vue'
</script>
