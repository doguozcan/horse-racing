// import functions to create router
import { createRouter, createWebHistory } from 'vue-router'
// horses view where users can randomly generate and view horses
import Horses from '../views/HorsesView.vue'
// program view where users can check out the horse racing scheulde
import Program from '../views/ProgramView.vue'
// races view where users can participate in horse races
import Races from '../views/RacesView.vue'
// results view where users can observe the outcomes of the races
import Results from '../views/ResultsView.vue'

// define all the application routes
const routes = [
  // route for the horses view
  { path: '/', name: 'Horses', component: Horses, meta: { title: 'Horses' } },
  // route for the program view
  { path: '/program', name: 'Program', component: Program, meta: { title: 'Program' } },
  // route for the races view
  { path: '/races', name: 'Races', component: Races, meta: { title: 'Races' } },
  // route for the results view
  { path: '/results', name: 'Results', component: Results, meta: { title: 'Results' } }
]

// router instance with the history mode
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// change document title name to router's meta information title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Horse Racing'
  next()
})

// in order to use in the app export it
export default router
