<template>
  <div class="flex flex-col items-center" v-if="$store.getters.programLength !== 0">
    <H1Tag>Good luck to all jockeys and horses! 🍀</H1Tag>
    <!-- start button is disabled when race is already running -->
    <div class="flex flex-row gap-2 sm:gap-4 mt-2 sm:mt-4">
      <ButtonComponent
        :disabled="$store.getters.getRaceInterval !== null"
        type="start"
        @click="$store.dispatch('startRace')"
        >Start</ButtonComponent
      >
      <!-- stop button is disabled when race is not running -->
      <ButtonComponent
        :disabled="$store.getters.getRaceInterval === null"
        type="stop"
        @click="$store.commit('stopRace')"
        >Stop</ButtonComponent
      >
    </div>
  </div>
</template>

<script setup>
import H1Tag from '../common/H1Tag.vue'
import ButtonComponent from '../common/ButtonComponent.vue'
</script>
