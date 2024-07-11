<template>
  <div class="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-montserrat">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
