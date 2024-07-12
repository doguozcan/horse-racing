<template>
  <div class="flex items-center gap-2 bg-slate-600 m-2 p-2 rounded-lg">
    <div class="flex justify-center items-center bg-slate-400 rounded-full w-8 h-8">
      {{ position }}
    </div>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
defineProps(['name', 'position'])
</script>
