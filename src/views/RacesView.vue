<template>
  <!-- if there is no horse generated yet it can be generated via this component -->
  <GenerateHorses />
  <!-- if no program is generated, it can be generated via generate program component -->
  <GenerateProgram />
  <!-- if horses are generated and program is implemented then race can be started-->
  <StartRace />
  <!-- share informations about the current race such as meter and time -->
  <RaceInformation />
  <RaceTrack />
</template>

<script setup>
import GenerateHorses from '../components/horse/GenerateHorses.vue'
import GenerateProgram from '../components/program/GenerateProgram.vue'
import StartRace from '../components/races/StartRace.vue'
import RaceInformation from '../components/races/RaceInformation.vue'
import RaceTrack from '../components/races/RaceTrack.vue'
</script>
