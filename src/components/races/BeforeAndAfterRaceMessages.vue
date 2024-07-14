<template>
  <div class="flex flex-col w-2/3 max-w-lg">
    <H1Tag class="text-center" v-if="$store.getters.resultsLength !== 6"
      >Good luck to all jockeys and horses! 🍀</H1Tag
    >
    <H1Tag class="text-center mb-2 sm:mb-4" v-if="$store.getters.resultsLength === 6"
      >Congratulations to every single jockey and horse! 🎉</H1Tag
    >
    <NavigateBetweenComponents
      v-if="$store.getters.resultsLength === 6"
      :to="'results'"
      :message="'You can navigate to the results page to see the leaderboard for every single round by clicking here!'"
    />
  </div>
</template>

<script setup>
import NavigateBetweenComponents from '../common/NavigateBetweenComponents.vue'
import H1Tag from '../common/H1Tag.vue'
</script>
