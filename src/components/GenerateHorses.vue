<template>
  <div class="bg-slate-500 p-4 rounded-lg text-center">
    <h1>No horse at the moment!</h1>
    <p>Do you want to generate right now?</p>
  </div>
  <ButtonComponent @click="$store.commit('generateHorses')">Yes</ButtonComponent>
</template>

<script setup>
import ButtonComponent from '../components/ButtonComponent.vue'
</script>
