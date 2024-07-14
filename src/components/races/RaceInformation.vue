<template>
  <div
    class="flex flex-col items-center bg-slate-900 p-1 rounded-xl my-2 w-2/5 max-w-sm"
    v-if="$store.getters.programLength !== 0 && $store.getters.resultsLength !== 6"
  >
    <div class="flex items-center justify-between w-3/4">
      <RaceClock />
      <!-- display current time at the current race -->
      <PTag class="md:text-xl my-4 text-center">Time: {{ $store.state.currentTime }}s</PTag>
    </div>
    <!-- display the distance of the round -->
    <PTag class="md:text-xl my-4 text-center">{{ $store.getters.getCurrentRoundLength }}m</PTag>
  </div>
</template>

<script setup>
import RaceClock from './RaceClock.vue'
import PTag from '../common/PTag.vue'
</script>
