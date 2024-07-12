<template>
  <div v-for="(result, index) in $store.state.results" :key="index">
    <p>Round {{ index + 1 }}</p>
    <div class="bg-slate-700 p-5 m-5">
      <div
        class="bg-slate-500 p-5 m-5"
        v-for="(horseInformation, horseIndex) in result"
        :key="horseIndex"
      >
        <ResultHorse :horseInformation="horseInformation" :horseIndex="horseIndex" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ResultHorse from '../components/ResultHorse.vue'
</script>
