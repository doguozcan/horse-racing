<template>
  <!-- displaying the condition of the horse with an emoji -->
  <PTag
    >Condition: {{ condition }}
    {{
      condition === 100
        ? '🔟'
        : condition > 90
          ? '9️⃣'
          : condition > 80
            ? '8️⃣'
            : condition > 70
              ? '7️⃣'
              : condition > 60
                ? '6️⃣'
                : condition > 50
                  ? '5️⃣'
                  : condition > 40
                    ? '4️⃣'
                    : condition > 30
                      ? '3️⃣'
                      : condition > 20
                        ? '2️⃣'
                        : condition > 10
                          ? '1️⃣'
                          : '0️⃣'
    }}</PTag
  >
</template>

<script setup>
import PTag from '../common/PTag.vue'

defineProps(['condition'])
</script>
