<template>
  <div class="p-5">
    <p class="text-2xl my-4 text-center">Time: {{ $store.state.currentTime }}s</p>
    <p class="text-2xl my-4 text-center">Meter: {{ $store.getters.getCurrentRoundLength }}</p>
    <div class="flex flex-row items-center justify-center">
      <div class="flex">
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          👶🏻
        </p>
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          🧒🏿
        </p>
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          👧🏽
        </p>
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          👱🏾‍♀️
        </p>
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          🧑🏻‍🦲
        </p>
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          🧔🏼
        </p>
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          👵🏿
        </p>
        <p
          class="text-2xl"
          :class="[$store.getters.getRaceInterval !== null ? 'animate-bounce' : '']"
        >
          🧑🏻‍🦳
        </p>
      </div>
    </div>
    <div class="flex justify-end">
      <p>🏁</p>
    </div>
    <div class="flex flex-col gap-2">
      <div class="bg-green-800 h-80 w-80">
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[0]?.horse.colorCode,
              left: `${($store.state.currentResult[0]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[1]?.horse.colorCode,
              left: `${($store.state.currentResult[1]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[2]?.horse.colorCode,
              left: `${($store.state.currentResult[2]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[3]?.horse.colorCode,
              left: `${($store.state.currentResult[3]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[4]?.horse.colorCode,
              left: `${($store.state.currentResult[4]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[5]?.horse.colorCode,
              left: `${($store.state.currentResult[5]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[6]?.horse.colorCode,
              left: `${($store.state.currentResult[6]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[7]?.horse.colorCode,
              left: `${($store.state.currentResult[7]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[8]?.horse.colorCode,
              left: `${($store.state.currentResult[8]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
        <div class="border h-8 relative">
          <div
            class="h-8 w-8 absolute"
            :style="{
              'background-color': $store.state.currentResult[9]?.horse.colorCode,
              left: `${($store.state.currentResult[9]?.meter / $store.getters.getCurrentRoundLength) * 320}px`
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
