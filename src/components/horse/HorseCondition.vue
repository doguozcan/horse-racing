<template>
  <!-- displaying the condition of the horse with an emoji -->
  <PTag>Condition: {{ condition }} {{ condition > 50 ? '🔋' : '🪫' }}</PTag>
</template>

<script setup>
import PTag from '../common/PTag.vue'

defineProps(['condition'])
</script>
