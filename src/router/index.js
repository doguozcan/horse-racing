import { createRouter, createWebHistory } from 'vue-router'
import Horses from '../views/HorsesView.vue'
import Races from '../views/RacesView.vue'
import Program from '../views/ProgramView.vue'
import Results from '../views/ResultsView.vue'

const routes = [
  { path: '/', name: 'Horses', component: Horses, meta: { title: 'Horses' } },
  { path: '/races', name: 'Races', component: Races, meta: { title: 'Races' } },
  { path: '/program', name: 'Program', component: Program, meta: { title: 'Program' } },
  { path: '/results', name: 'Results', component: Results, meta: { title: 'Results' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Horse Racing'
  next()
})

export default router
