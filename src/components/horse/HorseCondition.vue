<template>
  <!-- displaying the condition of the horse with an emoji -->
  <p class="sm:text-lg">Condition: {{ condition }} {{ condition > 50 ? '🔋' : '🪫' }}</p>
</template>

<script setup>
defineProps(['condition'])
</script>
