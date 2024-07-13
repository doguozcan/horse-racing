<template>
  <GenerateProgram v-if="$store.getters.horsesLength !== 0 && $store.getters.programLength === 0" />
  <GenerateHorses v-if="$store.getters.horsesLength === 0" />
  <RaceProgram v-if="$store.getters.programLength > 0" />
</template>

<script setup>
import RaceProgram from '../components/RaceProgram.vue'
import GenerateProgram from '../components/GenerateProgram.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
</script>
