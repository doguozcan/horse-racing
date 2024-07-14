<template>
  <div
    class="h-8 w-8 absolute"
    :style="{
      'background-color': currentResultData?.horse.colorCode,
      left: `${(currentResultData.meter / $store.getters.getCurrentRoundLength) * 320}px`
    }"
  />
</template>

<script setup>
defineProps(['currentResultData'])
</script>
