<template>
  <!-- display only when program is available -->
  <div
    class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    v-if="$store.getters.programLength > 0"
  >
    <!-- display each program obtained from the store -->
    <div v-for="(program, index) in $store.state.program" :key="index">
      <RoundProgram :program="program" :index="index" />
    </div>
  </div>
</template>

<script setup>
import RoundProgram from '../RoundProgram.vue'
</script>
