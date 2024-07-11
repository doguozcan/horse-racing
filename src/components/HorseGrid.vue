<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
    <HorseCard
      v-for="horse in horses"
      :key="horse.name"
      :name="horse.name"
      :condition="horse.condition"
      :color="horse.color"
    />
  </div>
</template>

<script setup>
import HorseCard from '../components/HorseCard.vue'
const horses = [
  { name: 'Thunderhoof', condition: 100, color: 'Black' },
  { name: 'Stardust', condition: 13, color: 'White' },
  { name: 'Midnight Mirage', condition: 50, color: 'Red' },
  { name: 'Blaze Runner', condition: 42, color: 'Blue' },
  { name: 'Whisperwind', condition: 34, color: 'Green' },
  { name: 'Shadowfax', condition: 75, color: 'Yellow' },
  { name: 'Dark Comet', condition: 68, color: 'Purple' },
  { name: 'Nightfire', condition: 90, color: 'Orange' },
  { name: 'Eclipse', condition: 27, color: 'Pink' },
  { name: 'Phantom', condition: 85, color: 'Brown' },
  { name: 'Obsidian', condition: 55, color: 'Gray' },
  { name: 'Nebula', condition: 33, color: 'Cyan' },
  { name: 'Raven', condition: 47, color: 'Magenta' },
  { name: 'Onyx', condition: 60, color: 'Indigo' },
  { name: 'Vortex', condition: 77, color: 'Turquoise' },
  { name: 'Storm', condition: 20, color: 'Maroon' },
  { name: 'Cinder', condition: 45, color: 'Olive' },
  { name: 'Mystic', condition: 52, color: 'Lavender' },
  { name: 'Ashen', condition: 39, color: 'Teal' },
  { name: 'Nightshade', condition: 72, color: 'Coral' }
]
</script>
