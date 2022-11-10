import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/index';

library.add(faTrash)
library.add(faPlus)
library.add(faEdit)
const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(BootstrapVue3)
app.use(store)
app.use(router)
app.mount('#app')
