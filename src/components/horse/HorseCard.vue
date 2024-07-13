<template>
  <!-- responsive card displaying horse details -->
  <div
    class="bg-slate-800 rounded-lg shadow-md shadow-slate-500 flex flex-col items-center gap-2 mx-6 my-2 p-2 sm:items-start sm:gap-4 sm:mx-4 sm:p-4 md:mx-2 md:gap-6 md:p-6"
  >
    <!-- component for displaying horse's name -->
    <HorseName :name="name" />
    <!-- component for horse's condition -->
    <HorseCondition :condition="condition" />
    <!-- component for horse's color name and an animation showing the color-->
    <HorseColor :colorName="colorName" :colorCode="colorCode" />
  </div>
</template>

<script setup>
import HorseName from './HorseName.vue'
import HorseCondition from './HorseCondition.vue'
import HorseColor from './HorseColor.vue'

defineProps(['name', 'condition', 'colorName', 'colorCode'])
</script>
