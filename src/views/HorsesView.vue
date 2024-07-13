<template>
  <HorsesTable />
  <GenerateHorses v-if="$store.getters.horsesLength === 0" />
</template>

<script setup>
import HorsesTable from '../components/horse/HorsesTable.vue'
import GenerateHorses from '../components/GenerateHorses.vue'
</script>
