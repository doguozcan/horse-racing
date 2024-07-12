<template>
  <!-- Take up the full screen with a dark slate color using the montserrat font and white text color -->
  <div class="min-h-screen bg-slate-950 text-white font-montserrat">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
// import the navigation bar that contains horses, programs, races and results views
import NavBar from './components/common/NavBar.vue'
</script>
