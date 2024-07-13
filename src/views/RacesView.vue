<template>
  <GenerateHorses v-if="$store.getters.horsesLength === 0" />
  <GenerateProgram v-if="$store.getters.horsesLength !== 0 && $store.getters.programLength === 0" />
  <StartRace v-if="$store.getters.programLength !== 0" />
  <RaceTrack v-if="$store.getters.programLength !== 0" />
</template>

<script setup>
import GenerateHorses from '../components/horse/GenerateHorses.vue'
import GenerateProgram from '../components/program/GenerateProgram.vue'
import StartRace from '../components/StartRace.vue'
import RaceTrack from '../components/RaceTrack.vue'
</script>
