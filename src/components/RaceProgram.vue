<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    <div v-for="(program, index) in $store.state.program" :key="index">
      <RoundProgram :program="program" :index="index" />
    </div>
  </div>
</template>

<script setup>
import RoundProgram from './RoundProgram.vue'
</script>
