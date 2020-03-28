<template>
  <div class="Follow">
   <Cell 
   v-for='(item,index) of $store.state.follow.list' 
   :key="item._id"
   :data='item'
   :index='index'
   apiName='follow'
   />
  </div>
</template>

<script>
  import Cell from '../components/uc-cell.vue'
    import {mapActions} from 'vuex'
	import {FOLLOW} from '../store/types.js'
  export default {
    name:'Follow',
    props:{},
    data(){
      return {
        list:[],
      }
    },
    components:{
      Cell
    },
    updated(){},
	activated(){
	  // this.$root.bLoading=true;
	  // this.FOLLOW()
	},
	activated(){},
    mounted(){
		// mapActions(['FOLLOW'])
		// this.FOLLOW()
		this[this.$types.FOLLOW]()
		},
	methods:mapActions('follow',['FOLLOW'])
  }
</script>

<style>
  .Follow{
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
</style>