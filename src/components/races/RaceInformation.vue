<template>
  <div
    class="flex flex-col items-center bg-slate-900 p-2 rounded-xl my-2 w-2/3 max-w-sm"
    v-if="$store.getters.programLength !== 0"
  >
    <div class="flex items-center gap-2 w-2/3">
      <RaceClock />
      <PTag class="text-2xl my-4 text-center">Time: {{ $store.state.currentTime }}s</PTag>
    </div>
    <PTag class="text-2xl my-4 text-center">Meter: {{ $store.getters.getCurrentRoundLength }}</PTag>
  </div>
</template>

<script setup>
import RaceClock from './RaceClock.vue'
import PTag from '../common/PTag.vue'
</script>
