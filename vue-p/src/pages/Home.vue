<template>
	<div class="Home">
	  
	  <Banner :data="$store.state.banner.list" apiName='banner'/>
	  
	  <div class="home-m-l-r">
	    <!-- <Cell :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
	    <!-- <Cell :index="0" :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
	    <Cell
	      v-for="(item,index) of $store.state.home.list"
	      :key="item._id"
	      :data="item"
	      :index="index"
	      apiName="home"
	    />
	  </div>
	  
	  
	</div>
</template>

<script>
	import Cell from '../components/uc-cell.vue'
	import Banner from '../components/uc-banner.vue'
  export default {
    name:'home',
    props:{},
    data(){
      return {
		  home:[],
		  banner:[],
      }
    },
    components:{
		Cell,Banner
	},
	activated(){},
	mounted(){
		this.$store.dispatch(`home/${this.$types.HOME}`)
		this.$store.dispatch(`banner/${this.$types.BANNER}`)
	},
    updated(){
	},
    methods:{}
  }
</script>

<style>
  .Home{
    /* background: #999999; */
  }
  .home-m-l-r{
    margin: 0 0.4rem;
  }
</style>
