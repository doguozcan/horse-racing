<template>
  <div class="flex flex-col">
    <H1Tag class="text-center">Round {{ index + 1 }}</H1Tag>
    <div class="bg-slate-900 rounded-lg m-2">
      <ResultHorse
        v-for="(horseInformation, horseIndex) in result"
        :key="horseIndex"
        :horseInformation="horseInformation"
        :horseIndex="horseIndex"
        :raceIndex="index"
      />
    </div>
  </div>
</template>

<script setup>
import H1Tag from '../common/H1Tag.vue'
import ResultHorse from './ResultHorse.vue'

defineProps(['result', 'index'])
</script>
