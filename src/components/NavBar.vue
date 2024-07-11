<template>
  <nav>
    <RouterLink to="/"><div>Horses</div></RouterLink>
    <RouterLink to="races"><div>Races</div></RouterLink>
    <RouterLink to="program-and-results"><div>Program & Results</div></RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
