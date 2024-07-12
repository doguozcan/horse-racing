<template>
  <div class="flex flex-col items-center">
    <GreetUser>Welcome to the Races!</GreetUser>
    <GenerateHorses v-if="$store.getters.horsesLength === 0" />
    <GenerateProgram
      v-if="$store.getters.horsesLength !== 0 && $store.getters.programLength === 0"
    />
    <StartRace v-if="$store.getters.programLength !== 0" />
  </div>
</template>

<script setup>
import GreetUser from '../components/GreetUser.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
import GenerateProgram from '../components/GenerateProgram.vue'
import StartRace from '../components/StartRace.vue'
</script>
