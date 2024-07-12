<template>
  <!-- display the navbar side by side on larger screens, top to bottom on smaller screens -->
  <nav class="flex flex-col mx-10 sm:flex-row justify-center">
    <!-- loop through navbar items to create navigation links -->
    <RouterLink
      v-for="(navBarItem, navBarIndex) in navBarItems"
      :key="navBarIndex"
      :to="navBarItem.path"
    >
      <NavBarItem :navBarItem="navBarItem" />
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import NavBarItem from './NavBarItem.vue'

const navBarItems = [
  { path: '/', label: 'Horses' },
  { path: '/program', label: 'Program' },
  { path: '/races', label: 'Races' },
  { path: '/results', label: 'Results' }
]
</script>
