<template>
  <div v-if="$store.getters.programLength !== 0">
    <div class="flex justify-end">
      <p>🏁</p>
    </div>
    <div>
      <div class="bg-green-800 h-80 w-80">
        <RacingHorse
          v-for="(currentResultData, index) in $store.state.currentResult"
          :key="index"
          :currentResultData="currentResultData"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import RacingHorse from './RacingHorse.vue'
</script>
