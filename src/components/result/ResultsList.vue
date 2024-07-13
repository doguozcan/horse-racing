<template>
  <!-- display grid when the first round is completed -->
  <div class="w-full grid grid-cols-1 sm:grid-cols-2" v-if="$store.getters.resultsLength !== 0">
    <!-- display leaderboards for every single round -->
    <RoundResult
      v-for="(result, index) in $store.state.results"
      :key="index"
      :result="result"
      :index="index"
    />
  </div>
</template>

<script setup>
import RoundResult from './RoundResult.vue'
</script>
