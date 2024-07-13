<template>
  <QuestionCard v-if="$store.getters.programLength !== 0 && $store.getters.resultsLength === 0">
    <PTag
      >Have you started the race? If so, just wait for the first round to finish! Otherwise, if you
      haven't started any race yet, you can navigate to the
      <!-- if the user has not yet initiated any races, they may navigate to the races view via the link router -->
      <RouterLink
        to="/races"
        class="text-slate-950 hover:text-slate-500 duration-100 font-bold animate-pulse"
        >races</RouterLink
      >
      page.</PTag
    >
  </QuestionCard>
</template>

<script setup>
import QuestionCard from '../common/QuestionCard.vue'
import PTag from '../common/PTag.vue'
</script>
