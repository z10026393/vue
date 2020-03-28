<template>
  <div class="detail">
	  <ucNav/>
    <div class="content" v-if="detail.title">
      <div class="header clear"><!-- <h2><img src="/img/head.png" alt=""/></h2> --><p>{{detail.title}}</p></div>
      <div class="cont">
		  <hr/>
     <!--   <h3>习近平1：弘扬宪法精神推动宪法实施</h3>
	 
        <div class="time"><p>2019年12月04日 20:35:58 <span><img src="../assets/img/zan.png" alt=""/></span></p></div> -->
        <div class="text-box">{{detail.des}}</div>
      </div>
    </div>
   <ucToolbar/>
  </div>
</template>

<script>
	import ucToolbar from '../components/uc-toolbar.vue'
	import ucNav from '../components/nav'
	  import {mapState} from 'vuex'
  export default {
    name: 'Detail',
	data(){
		return {
			detail:{}
		}
	},
    props: {},
    components: {
		ucToolbar,ucNav
	},
    mounted() {
		let apiname=this.$route.query.apiName;
		let _id = this.$route.params._id
		this.$store.dispatch(`detail/${this.$types.DETAIL}`,{apiname,_id})
	},
	computed:mapState('detail',['detail']),
    updated() {
	},
    methods: {},
	filters:{
		date(time){
		  
		  let fillzero = n => n < 10 ? '0' + n : '' + n;
		  
		  let d=new Date();
		  d.setTime(time)
		  let year = d.getFullYear();
		  let month = d.getMonth()+1;
		  let date = d.getDate();
		  let hour = d.getHours();
		  let min = d.getMinutes();
		  let sec = d.getSeconds();
		  return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
		}
	}
  }
</script>

<style scoped>
  html,body{ overflow-x: hidden; }
  .nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
  .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
  .nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}
  
  .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
  .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
  .header h2{ float:left; margin-right:0.18rem;}
  .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}
  
  .content .cont{ padding:0 0.38rem; color:#494d4d;}
  .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
  .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
  .time p{ float:left;position:relative;}
  .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
  .time span img{width:100%;height:100%;}
  
  .cont .text-box{ font-size:0.25rem;}
  .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
  .foot-btn{width:100%;height:0.8rem; background:#fff; border-top:1px solid #e8eaec; position:fixed; left:0;bottom:0;}
  .foot-btn ul{width:6.4rem; margin:0 auto;height:0.52rem; margin-top:0.16rem;box-sizing: border-box;}
  .foot-btn ul li{ float:left;}
  .foot-btn ul li a{width:100%;height:100%; display:block;}
  .foot-btn ul .say{width:1.5rem;height:0.52rem; border-right:1px solid #e8eaec;}
  .say i{width:0.36rem;height:0.26rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.7rem; margin-top:0.13rem;}
  .say span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
  .foot-btn ul .zan{width:1.5rem;height:0.52rem; border-right:1px solid #e8eaec;}
  .zan i{width:0.36rem;height:0.28rem; background:url(../assets/img/zan1.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.54rem; margin-top:0.13rem;}
  .zan span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
  .foot-btn ul .xing{width:1.2rem;height:0.52rem; border-right:1px solid #e8eaec;}
  .xing i{width:0.34rem;height:0.24rem; margin:0 auto; display:block; padding-top:0.1rem;}
  .xing i img{width:100%;}
  .foot-btn ul .fx{width:1.25rem;height:0.52rem;}
  .fx i{width:0.33rem;height:0.08rem;display:block; margin:0 auto; padding-top:0.15rem;}
  .fx i img{width:100%;}
</style>
