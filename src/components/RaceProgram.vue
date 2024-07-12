<template>
  <div v-for="(program, index) in $store.state.program" :key="index">
    <div>
      <p>{{ program.length }}</p>
      <div class="bg-red-600 m-2 p-2">
        <div v-for="horse in program.horses" :key="horse.name">
          <div class="bg-green-500 p-2 m-2">
            <p>{{ horse.name }}</p>
            <p>{{ horse.condition }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['length', 'horses'])
</script>
