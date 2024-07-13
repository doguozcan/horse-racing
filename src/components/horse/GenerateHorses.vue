<template>
  <GenerateComponent
    message="No horses available at the moment!"
    question="Would you like to generate them right now?"
    :activity="() => $store.commit('generateHorses')"
    buttonMessage="Yes 🐎"
    v-if="$store.getters.horsesLength === 0"
  />
</template>

<script setup>
import GenerateComponent from '../common/GenerateComponent.vue'
</script>
