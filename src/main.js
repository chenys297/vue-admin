import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// style
import './styles/index.scss'

// filters
import * as filters from './filter'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
