import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// register global Components
import './components/index'

// Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// style
import './styles/index.scss'
// iconfont
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

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
