<template>
  <GenerateProgram />
  <GenerateHorses />
  <NoRoundCompleted />
  <ResultsList v-if="$store.getters.resultsLength !== 0" />
</template>

<script setup>
import GenerateProgram from '../components/program/GenerateProgram.vue'
import GenerateHorses from '../components/horse/GenerateHorses.vue'
import NoRoundCompleted from '../components/result/NoRoundCompleted.vue'
import ResultsList from '../components/ResultsList.vue'
</script>
