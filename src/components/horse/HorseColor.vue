<template>
  <div class="flex items-center gap-4">
    <!-- increase font size on larger devices -->
    <p class="sm:text-lg">Color: {{ colorName }}</p>
    <!-- animated spinner displaying the color in action -->
    <div
      class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-md animate-spin"
      :style="{ 'background-color': colorCode }"
    />
  </div>
</template>

<script setup>
defineProps(['colorName', 'colorCode'])
</script>
