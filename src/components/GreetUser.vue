<template>
  <div class="flex p-4 text-lg sm:text-2xl gap-2">
    Welcome to the {{ `${$route.name[0].toUpperCase()}${this.$route.name.slice(1)}` }}!
    <p class="sm:animate-bounce">🐴</p>
  </div>
</template>
