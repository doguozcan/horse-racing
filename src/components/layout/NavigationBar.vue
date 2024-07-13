<template>
  <!-- display the navbar side by side on larger screens, top to bottom on smaller screens -->
  <nav class="flex flex-col mx-10 sm:flex-row justify-center">
    <!-- loop through navbar items to create navigation links -->
    <RouterLink v-for="(item, index) in navigationBarItems" :key="index" :to="item.path">
      <NavigationBarItem :item="item" />
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import NavigationBarItem from './NavigationBarItem.vue'

// define app's paths and their labels
const navigationBarItems = [
  { path: '/', label: 'Horses' },
  { path: '/program', label: 'Program' },
  { path: '/races', label: 'Races' },
  { path: '/results', label: 'Results' }
]
</script>
