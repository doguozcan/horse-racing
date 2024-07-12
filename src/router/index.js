import { createRouter, createWebHistory } from 'vue-router'
import Horses from '../views/HorsesView.vue'
import Races from '../views/RacesView.vue'
import Program from '../views/ProgramView.vue'
import Results from '../views/ResultsView.vue'

const routes = [
  { path: '/', name: 'Horses', component: Horses },
  { path: '/races', name: 'Races', component: Races },
  { path: '/program', name: 'Program', component: Program },
  { path: '/results', name: 'Results', component: Results }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
