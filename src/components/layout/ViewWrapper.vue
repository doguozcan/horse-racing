<template>
  <!-- this template wraps the view to manage layout -->
  <div class="flex flex-col items-center">
    <!-- import common components that displays on every view -->
    <GreetUser />
    <slot />
  </div>
</template>

<script setup>
import GreetUser from '../common/GreetUser.vue'
</script>
