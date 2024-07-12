<template>
  <ButtonComponent @click="$store.dispatch('startRace')">Start the race</ButtonComponent>
</template>

<script setup>
import ButtonComponent from '../components/ButtonComponent.vue'
</script>
