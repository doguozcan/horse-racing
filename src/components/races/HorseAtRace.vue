<template>
  <div
    class="h-8 w-8 absolute"
    :style="{
      'background-color': currentResultData?.horse.colorCode,
      left: `${(currentResultData.meter / $store.getters.getCurrentRoundLength) * currentPixel}px`
    }"
  />
</template>

<script setup>
defineProps(['currentResultData', 'currentPixel'])
</script>
