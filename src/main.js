import Vue from 'vue'
import App from './App.vue'
import Flare from '@lkmx/flare-legacy/src/main'

import './sass/index.scss'

require('typeface-open-sans')

// App specific
import DefaultLayout from '@/components/DefaultLayout'
import TwoColumns from '@/components/TwoColumns'
import Routes from '@/components/Routes'

Vue.component('DefaultLayout', DefaultLayout)
Vue.component('TwoColumns', TwoColumns)
Vue.component('Routes', Routes)

Vue.config.productionTip = false

Vue.use(Flare)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
