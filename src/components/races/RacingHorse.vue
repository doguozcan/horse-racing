<template>
  <div class="border h-8 relative">
    <div
      class="h-8 w-8 absolute"
      :style="{
        'background-color': currentResultData?.horse.colorCode,
        left: `${(currentResultData.meter / $store.getters.getCurrentRoundLength) * 320}px`
      }"
    />
  </div>
</template>

<script setup>
defineProps(['currentResultData'])
</script>
