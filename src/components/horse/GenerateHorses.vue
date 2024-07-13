<template>
  <QuestionCard v-if="$store.getters.horsesLength === 0">
    <H1Tag>No horse at the moment!</H1Tag>
    <PTag>Do you want to generate them right now?</PTag>
    <ButtonComponent @click="$store.commit('generateHorses')">Yes</ButtonComponent>
  </QuestionCard>
</template>

<script setup>
import QuestionCard from '../common/QuestionCard.vue'
import H1Tag from '../common/H1Tag.vue'
import PTag from '../common/PTag.vue'
import ButtonComponent from '../ButtonComponent.vue'
</script>
