<template>
  <div class="flex flex-col items-center">
    <p>Round {{ index + 1 }}</p>
    <div class="bg-slate-700 p-5 m-5 rounded-lg shadow-lg shadow-slate-300">
      <div
        class="bg-slate-500 p-5 m-5 rounded-lg"
        v-for="(horseInformation, horseIndex) in result"
        :key="horseIndex"
      >
        <ResultHorse
          :horseInformation="horseInformation"
          :horseIndex="horseIndex"
          :raceIndex="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['result', 'index'])
import ResultHorse from '../components/ResultHorse.vue'
</script>
