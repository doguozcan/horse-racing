<template>
  <div class="flex flex-col items-center" v-if="$store.getters.programLength !== 0">
    <H1Tag v-if="$store.getters.resultsLength !== 6">Good luck to all jockeys and horses! 🍀</H1Tag>
    <H1Tag v-if="$store.getters.resultsLength === 6"
      >Congratulations to every single jockey and horse! 🎉</H1Tag
    >
    <H1Tag v-if="$store.getters.resultsLength === 6">
      You can navigate to the
      <RouterLink
        to="/results"
        class="text-slate-400 hover:text-slate-300 duration-100 font-bold animate-pulse"
        >results</RouterLink
      >
      page to see the leaderboard for every single round!</H1Tag
    >
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
