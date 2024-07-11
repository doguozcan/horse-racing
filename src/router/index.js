import { createRouter, createWebHistory } from 'vue-router'
import Horses from '../views/HorsesView.vue'
import Races from '../views/RacesView.vue'
import ProgramAndResults from '../views/ProgramAndResultsView.vue'

const routes = [
  {
    path: '/',
    component: Horses
  },
  {
    path: '/races',
    component: Races
  },
  {
    path: '/program-and-results',
    component: ProgramAndResults
  }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
