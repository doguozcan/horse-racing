<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
    <div v-for="(result, index) in $store.state.results" :key="index">
      <RoundResult :result="result" :index="index" :raceIndex="raceIndex" />
    </div>
  </div>
</template>

<script setup>
import RoundResult from '../components/RoundResult.vue'
</script>
