<template>
  <div class="flex flex-col items-center">
    <GreetUser>Welcome to the Program & Results!</GreetUser>
    <RaceProgram v-if="$store.getters.programLength > 0" />
    <GenerateProgram
      v-if="$store.getters.horsesLength !== 0 && $store.getters.programLength === 0"
    />
    <GenerateHorses v-if="$store.getters.horsesLength === 0" />
  </div>
</template>

<script setup>
import GreetUser from '../components/GreetUser.vue'
import RaceProgram from '../components/RaceProgram.vue'
import GenerateProgram from '../components/GenerateProgram.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
</script>
