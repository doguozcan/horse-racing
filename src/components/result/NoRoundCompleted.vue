<template>
  <QuestionCard v-if="$store.getters.programLength !== 0 && $store.getters.resultsLength === 0">
    <PTag
      >Have you started the race? If so, just wait for the first round to finish!
      <!-- if the user has not yet initiated any races, they may navigate to the races view via the link router -->
      <NavigateBetweenComponents
        :to="'races'"
        :message="'Otherwise, if you haven\'t started any race yet, you can navigate to the races page to start a race.'"
      />
    </PTag>
  </QuestionCard>
</template>

<script setup>
import QuestionCard from '../common/QuestionCard.vue'
import PTag from '../common/PTag.vue'
import NavigateBetweenComponents from '../common/NavigateBetweenComponents.vue'
</script>
