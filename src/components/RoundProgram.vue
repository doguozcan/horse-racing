<template>
  <!-- display round's distance information and list of horses in the round -->
  <div class="bg-slate-800 p-4 rounded-lg m-6 sm:m-4 md:m-2">
    <!-- title of the round -->
    <H1Tag class="text-center">Program {{ index + 1 }} - {{ program.length }}m 🏁</H1Tag>
    <!-- display each horse dynamically -->
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
import H1Tag from './common/H1Tag.vue'
import HorsePosition from './HorsePosition.vue'

defineProps(['program', 'index'])
</script>
