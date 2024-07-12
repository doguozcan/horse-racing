<template>
  <div v-for="(result, index) in $store.state.results" :key="index">
    <p>Round {{ index + 1 }}</p>
    <div class="bg-red-500 p-5 m-5">
      <div
        class="one-round-all bg-yellow-500 p-5"
        v-for="(horseInformation, horseIndex) in result"
        :key="horseIndex"
      >
        <p>{{ horseIndex + 1 }}</p>
        <p>{{ horseInformation.horse.name }}</p>
        <p>Time: {{ horseInformation.time }}</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
