<template>
  <!-- displaying biger font on larger screens -->
  <p class="sm:text-lg">Name: {{ name }}</p>
</template>

<script setup>
defineProps(['name'])
</script>
