<template>
  <div class="flex flex-col gap-2 bg-slate-600 p-4 rounded-lg shadow-xl m-2">
    <p>Name: {{ name }}</p>
    <p>Condition: {{ condition }}</p>
    <div class="flex items-center gap-4">
      <p>Color: {{ colorName }}</p>
      <div class="w-5 h-5 rounded-md animate-spin" :style="{ 'background-color': colorCode }"></div>
    </div>
  </div>
</template>

<script setup>
defineProps(['name', 'condition', 'colorName', 'colorCode'])
</script>
div
