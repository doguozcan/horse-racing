<template>
  <!-- display race clock using an animated emoji clock -->
  <p class="text-3xl sm:text-4xl md:text-5xl">
    {{ clocks[Math.floor(parseFloat($store.state.currentTime) % 12)] }}
  </p>
</template>

<script setup>
const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛']
</script>
