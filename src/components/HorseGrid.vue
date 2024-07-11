<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
    <HorseCard
      v-for="horse in $store.state.horses"
      :key="horse.name"
      :name="horse.name"
      :condition="horse.condition"
      :colorName="horse.colorName"
      :colorCode="horse.colorCode"
    />
  </div>
</template>

<script setup>
import HorseCard from '../components/HorseCard.vue'
</script>
