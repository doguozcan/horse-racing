<template>
  <!-- take up the full screen with a dark slate color using the montserrat font and white text color -->
  <div class="min-h-screen bg-slate-950 text-white font-montserrat">
    <!-- display navbar on every single view -->
    <NavigationBar />
    <!-- wrap the view to display it with flex -->
    <ViewWrapper>
      <!-- display views in the router -->
      <RouterView />
    </ViewWrapper>
  </div>
</template>

<script setup>
// to manage layout wrap the view
import ViewWrapper from './components/layout/ViewWrapper.vue'
// import the navigation bar that contains horses, programs, races and results views
import NavigationBar from './components/layout/NavigationBar.vue'
</script>
