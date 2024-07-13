<template>
  <GenerateProgram v-if="$store.getters.horsesLength !== 0 && $store.getters.programLength === 0" />
  <GenerateHorses v-if="$store.getters.horsesLength === 0" />
  <WarningMessage v-if="$store.getters.programLength !== 0 && $store.getters.resultsLength === 0">
    No round is completed yet
  </WarningMessage>
  <ResultsList v-if="$store.getters.resultsLength !== 0" />
</template>

<script setup>
import GenerateProgram from '../components/GenerateProgram.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
import WarningMessage from '../components/WarningMessage.vue'
import ResultsList from '../components/ResultsList.vue'
</script>
