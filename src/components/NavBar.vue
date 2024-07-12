<template>
  <nav class="flex flex-col sm:flex-row justify-center bg-slate-900">
    <RouterLink
      v-for="(navBarItem, navBarIndex) in navBarItems"
      :key="navBarIndex"
      :to="navBarItem.path"
    >
      <div
        class="m-1 py-1 rounded-lg text-center sm:m-4 sm:px-4 sm:py-2 hover:opacity-90 active:opacity-100"
        :class="{
          'bg-slate-800': $route.path !== navBarItem.path,
          'bg-slate-400 shadow-md shadow-slate-500': $route.path === navBarItem.path
        }"
      >
        {{ navBarItem.label }}
      </div>
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const navBarItems = [
  { path: '/', label: 'Horses' },
  { path: '/races', label: 'Races' },
  { path: '/program', label: 'Program' },
  { path: '/results', label: 'Results' }
]
</script>
