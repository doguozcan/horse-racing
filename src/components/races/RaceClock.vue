<template>
  <p class="text-3xl sm:text-4xl md:text-5xl">
    {{ clocks[$store.state.currentTime % 12] }}
  </p>
</template>

<script setup>
const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛']
</script>
