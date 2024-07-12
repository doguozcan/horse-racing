// get styles
import './assets/index.css'
// create vue app
import { createApp } from 'vue'
// import app component
import App from './App.vue'
// use Vue Router - reference: https://router.vuejs.org/
import router from './router'
// use Vuex - reference: https://vuex.vuejs.org/
import store from './store'
// initiate app
const app = createApp(App)
// connect store to the app
app.use(store)
// use router in the app
app.use(router)
// mount on index.html's div tag named #app
app.mount('#app')
