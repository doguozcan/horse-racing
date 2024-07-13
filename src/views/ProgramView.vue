<template>
  <GenerateHorses />
  <GenerateProgram />
  <RaceProgram v-if="$store.getters.programLength > 0" />
</template>

<script setup>
import GenerateHorses from '../components/horse/GenerateHorses.vue'
import GenerateProgram from '../components/program/GenerateProgram.vue'
import RaceProgram from '../components/RaceProgram.vue'
</script>
