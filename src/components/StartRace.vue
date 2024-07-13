<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <ButtonComponent
        :disabled="$store.getters.getRaceInterval !== null"
        type="start"
        @click="$store.dispatch('startRace')"
        >Start the race</ButtonComponent
      >
      <ButtonComponent
        :disabled="$store.getters.getRaceInterval === null"
        type="stop"
        @click="$store.commit('stopRace')"
        >Stop the race</ButtonComponent
      >
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from './common/ButtonComponent.vue'
</script>
