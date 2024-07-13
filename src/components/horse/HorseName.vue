<template>
  <!-- displaying biger font on larger screens -->
  <PTag>Name: {{ name }}</PTag>
</template>

<script setup>
import PTag from '../common/PTag.vue'

defineProps(['name'])
</script>
