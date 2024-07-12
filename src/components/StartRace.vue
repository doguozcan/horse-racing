<template>
  <ButtonComponent @click="$store.commit('startRace')">Start the race</ButtonComponent>
</template>

<script setup>
import ButtonComponent from '../components/ButtonComponent.vue'
</script>
