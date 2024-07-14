<template>
  <H1Tag class="text-center">
    <RouterLink
      :to="to"
      class="text-slate-400 hover:text-slate-300 duration-100 font-bold animate-pulse"
      >{{ message }}</RouterLink
    ></H1Tag
  >
</template>

<script setup>
defineProps(['to', 'message'])
</script>
