<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    <div v-for="(program, index) in $store.state.program" :key="index">
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
    </div>
  </div>
</template>

<script setup>
import HorsePosition from './HorsePosition.vue'
defineProps(['length', 'horses'])
</script>
