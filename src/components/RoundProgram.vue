<template>
  <div class="border p-4 rounded-lg">
    <p class="text-xl">Program {{ index + 1 }} - {{ program.length }}m</p>
    <HorsePosition
      v-for="(horse, index) in program.horses"
      :key="horse.name"
      :name="horse.name"
      :position="index + 1"
    >
    </HorsePosition>
  </div>
</template>

<script setup>
import HorsePosition from './HorsePosition.vue'
defineProps(['program', 'index'])
</script>
