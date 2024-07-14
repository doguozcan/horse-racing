<template>
  <div class="mt-10 flex flex-col items-center">
    <p class="text-xl sm:text-2xl md:text-4xl">⚠️Page Not Found⚠️</p>
    <div class="flex gap-2 m-4">
      <div
        v-for="(emoji, index) in ['🐴', '🐎', '🏇', '🎠']"
        class="text-xl sm:text-2xl md:text-4xl animate-spin"
        :key="index"
      >
        {{ emoji }}
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
