<template>
  <GenerateComponent
    message="No program at the moment!"
    question="Do you want to generate the program right now?"
    :activity="() => $store.commit('generateProgram')"
    buttonMessage="Yes 📋"
    v-if="$store.getters.horsesLength !== 0 && $store.getters.programLength === 0"
  />
</template>

<script setup>
import GenerateComponent from '../common/GenerateComponent.vue'
</script>
