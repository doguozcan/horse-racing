<template>
  <div v-if="$store.getters.programLength !== 0 && $store.getters.resultsLength !== 6">
    <div class="m-2">
      <div class="bg-green-800 h-80 w-[400px] sm:w-[550px] md:w-[700px] lg:w-[850px]">
        <RacingHorse
          v-for="(currentResultData, index) in $store.state.currentResult"
          :key="index"
          :currentResultData="currentResultData"
          :currentPixel="currentPixel"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import RacingHorse from './RacingHorse.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentPixel = ref(400)

const updateCurrentPixel = () => {
  if (window.innerWidth >= 1024) {
    currentPixel.value = 850
  } else if (window.innerWidth >= 768) {
    currentPixel.value = 700
  } else if (window.innerWidth >= 640) {
    currentPixel.value = 550
  } else {
    currentPixel.value = 400
  }
}

onMounted(() => {
  updateCurrentPixel()
  window.addEventListener('resize', updateCurrentPixel)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCurrentPixel)
})
</script>
