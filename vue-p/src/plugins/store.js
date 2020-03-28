import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import state from '../store/state.js'
// import actions from '../store/actions.js'
import mutations from '../store/mutations.js'
// import getters from '../store/getters.js'



import banner from '../store/modules/banner.js'
import column from '../store/modules/column.js'
import detail from '../store/modules/detail.js'
import follow from '../store/modules/follow.js'
import home from '../store/modules/home.js'
import user from '../store/modules/user.js'
import buycar from '../store/modules/buycar.js'

let store = new Vuex.Store({
  state,mutations,
  modules:{
    banner,column,detail,follow,home,user,buycar
  }
})
export default store