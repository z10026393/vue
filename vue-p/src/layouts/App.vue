<template>
  <div id="app">
	<loading v-if="$store.state.bLoading"/>
	<Header v-if='$store.state.bNav'/>
	<router-view></router-view>
	<Footer v-if='$store.state.bFoot'/>
  </div>
</template>

<script>
	import Header from './Header.vue'
	import Home from '../pages/Home.vue'
	import Footer from './Footer.vue'
	import loading from '../components/uc-loading.vue'
export default {
  name: 'app',
  data(){
	  return{
	  }
  },
  components: {
    Header,Footer,loading
  },
  watch:{
	  $route:{//路由监听，属性检测
		  handler(nextValue,PrevValue){
			  // console.log(nextValue)
			  let path = nextValue.path;//获取路由信息
			  if(/home|follow|column/.test(path)){
				   this.$store.commit('UPDATE_NAV',true)
				   this.$store.commit('UPDATE_FOOT',true)
			  }
			  if(/detail|login|reg/.test(path)){
				  this.$store.commit('UPDATE_NAV',false)
				  this.$store.commit('UPDATE_FOOT',false)
			  }
			  if(/user|buycar/.test(path)){
				this.$store.commit('UPDATE_NAV',false)
				this.$store.commit('UPDATE_FOOT',true)
			   }
		  },
		  immediate:true
	  }
  }
}
</script>

<style>
.app_min{
	padding-top: 40px;
}
</style>
