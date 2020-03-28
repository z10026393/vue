import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引入公共样式
import './assets/css/base.css'
import './assets/js/font.js'

// //引入插件
import router from './plugins/router.js'
//引入服务端配置模块
import server from './config/server.js';
Vue.prototype.$baseUrl = server.baseUrl;//把服务器基础地址，作为实例属性，捆绑到了vue上

//引入axios插件配置
import './plugins/axios'

//引入状态管理
import store from './plugins/store.js'

import * as types from './store/types.js';
Vue.prototype.$types=types;


  //同步localStorage 到 vuex  防止强刷
let local = window.localStorage.getItem('user');

if(local){
    store.commit('user/USER',JSON.parse(local))
  }
let vm = new Vue({
	// data:{
	//   bNav:false,
	//   bFoot:false,
	//   bLoading:false,
	// },
  render: h => h(App),
  router,
  store
  // axios,
}).$mount('#app')
export default vm;