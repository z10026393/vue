//1.引入路由包
import Vue from 'vue'
import VueRouter from 'vue-router'
//2.安装插件到Vue
Vue.use(VueRouter);
//引入文件
let Home =()=>import(/* webpackChunkName: "Home-Column-Follow" */ "../pages/Home.vue");
let Column =()=>import(/* webpackChunkName: "Home-Column-Follow" */ "../pages/Column.vue");
let Follow =()=>import(/* webpackChunkName: "Home-Column-Follow" */ "../pages/Follow.vue");
let Login =()=>import(/* webpackChunkName: "Login-User-Reg" */ "../pages/Login.vue");
let User =()=>import(/* webpackChunkName: "Login-User-Reg" */ "../pages/User.vue");
let Reg =()=>import(/* webpackChunkName: "Login-User-Reg" */ "../pages/Reg.vue");

import Buycar from '../pages/Buycar.vue';
//3.路由配置
let routes = [
	{path:'/home',component:Home},
	{path:'/login',component:Login},
	{path:'/user',component:User},
	{path:'/Reg',component:Reg},
	{
	  path:'/detail/:_id',
	  component:(r) => { require(['../pages/Detail.vue'],r) } ,
	  // name:'detail'
	},
	{path:'/column',component:Column},
	{path:'/follow',component:Follow},
	{path:'/buycar',component:Buycar},
	{path:'/',redirect:'/home'},
	{path:'*',component:(r) => { require(['../pages/404.vue'],r)}},
	// meta: { requiresAuth: true },//定义路由的时候配置 `meta` 字段
	// //访问 `meta` 字段this.$route.matched   to.matched
	// //局部路由器守卫
	// beforeEnter:(to, from, next)=>{
	// 	// console.log('路由器守卫')
	// 	next()
	// }
	// },
	// {path:'/goods',component:Goods,
	// 	//子路由器  _id为动态跳转
	// 	children:[
	// 	{path:':_id',component:Detail},
	// 	]
	// },
	// {path:'/',redirect:"/home",},//路由器重定向
	// {path:"*",component:No}
]
//4.路由实例
let router = new VueRouter({
	routes,
	mode:'history',//哈希模式   location.href
	//mode:'history'//哈希模式   history.pushState
	scrollBehavior (to, from, savedPosition) {
	    return { x: 0, y: 0 }
		//对于所有路由导航，简单地让页面加载的时候回到到顶部
	  },
})
//全局守卫
router.beforeEach((to, from, next)=>{
	 //全局守卫业务
	  //	to: 目标路由
	  //	from: 当前路由
	  
	  // next() 跳转  一定要调用
	// console.log("全局守卫",to,from)
	next()
})

//后置
router.afterEach((to,from)=>{
  //全局后置守卫业务
  // console.log("全局后置守卫",to,from)
})
//5.导出路由实例，让他去控制vue根
export default router