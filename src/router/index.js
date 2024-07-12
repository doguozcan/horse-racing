import { createRouter, createWebHistory } from 'vue-router'
import Horses from '../views/HorsesView.vue'
import Races from '../views/RacesView.vue'
import Program from '../views/ProgramView.vue'
import Results from '../views/ResultsView.vue'

const routes = [
  { path: '/', component: Horses },
  { path: '/races', component: Races },
  { path: '/program', component: Program },
  { path: '/results', component: Results }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
