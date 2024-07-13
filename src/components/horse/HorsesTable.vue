<template>
  <!-- display horses in a responsive grid -->
  <div
    class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-4 md:gap-2"
    v-if="$store.getters.horsesLength > 0"
  >
    <!-- dynamically display each horse from vuex store -->
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
import HorseCard from './HorseCard.vue'
</script>
