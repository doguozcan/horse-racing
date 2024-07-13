<template>
  <QuestionCard>
    <H1Tag>{{ message }}</H1Tag>
    <PTag>{{ question }}</PTag>
    <ButtonComponent @click="activity">{{ buttonMessage }}</ButtonComponent>
  </QuestionCard>
</template>

<script setup>
defineProps(['message', 'question', 'activity', 'buttonMessage'])
import QuestionCard from './QuestionCard.vue'
import H1Tag from './H1Tag.vue'
import PTag from './PTag.vue'
import ButtonComponent from './ButtonComponent.vue'
</script>
