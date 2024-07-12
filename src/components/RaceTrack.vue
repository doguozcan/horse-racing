<template>
  <div class="p-5">
    <p class="text-2xl">Time {{ $store.state.currentTime }}</p>
    <div class="bg-green-800 h-80 w-80">
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[0]?.horse.colorCode,
            left: `${($store.state.currentResult[0]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[1]?.horse.colorCode,
            left: `${($store.state.currentResult[1]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[2]?.horse.colorCode,
            left: `${($store.state.currentResult[2]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[3]?.horse.colorCode,
            left: `${($store.state.currentResult[3]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[4]?.horse.colorCode,
            left: `${($store.state.currentResult[4]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[5]?.horse.colorCode,
            left: `${($store.state.currentResult[5]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[6]?.horse.colorCode,
            left: `${($store.state.currentResult[6]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[7]?.horse.colorCode,
            left: `${($store.state.currentResult[7]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[8]?.horse.colorCode,
            left: `${($store.state.currentResult[8]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
      <div class="border h-8 relative">
        <div
          class="h-8 w-8 absolute"
          :style="{
            'background-color': $store.state.currentResult[9]?.horse.colorCode,
            left: `${($store.state.currentResult[9]?.meter / 1200) * 320}px`
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
