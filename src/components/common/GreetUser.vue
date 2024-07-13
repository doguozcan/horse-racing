<template>
  <!-- greet user with dynamic view name using route property when route's name is accessed  -->
  <div class="flex p-4 text-lg sm:text-2xl gap-1 sm:gap-2" v-if="$route.name">
    Welcome to the
    <!-- display routes name -->
    <span class="animate-pulse">{{
      `${$route.name[0].toUpperCase()}${this.$route.name.slice(1)}!`
    }}</span>
    <p class="sm:animate-bounce">🐴</p>
  </div>
</template>
