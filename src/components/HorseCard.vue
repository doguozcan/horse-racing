<template>
  <div class="flex flex-col gap-2 bg-slate-600 p-4 rounded-lg shadow-inner shadow-slate-400 m-2">
    <p>Name: {{ name }}</p>
    <p>Condition: {{ condition }}</p>
    <p>Color: {{ color }}</p>
  </div>
</template>

<script setup>
defineProps(['name', 'condition', 'color'])
</script>
