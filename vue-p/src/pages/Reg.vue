<template>
	<div class="content">
	  
	  <p class="fhbtn"><a href="mydoc_m.html"></a></p>
	  
	  <h1 id="h1" @click="upload"></h1>
	   <input type="file" id="file" style="display: none;">
	  <div class="login-box">
	    <p class="lsolid"></p>
	    <div class="login">
	      <router-link 
			to="/Login"
			tag="a"
		>登录</router-link>
		<span></span>
		<router-link
			to="/Reg"
			tag="a"
		>注册</router-link>
	    </div>
	    <p class="rsolid"></p>
	  </div>
	  
	<div class="input">
			  <uc-input label='账号' type='text' v-model.trim="username"/>
			  <uc-input :label="'密码'" type='password' v-model.trim="password"/>
	</div>
	  <div class="footbox">
	    <Button text='注  册' @click='Reg'/>
	    <a href="javascript:;" class="tishi">忘记密码？</a>
	  </div>
	  {{errorMess}}
	</div>
</template>

<script>
import UcInput from '../components/uc-input.vue'
import Button from '../components/uc-button.vue'
import axios from 'axios'
  export default {
    name:'Login',
    props:{},
    data(){
      return {
		  username:'',
		  password:'',
		  errorMess:''
      }
    },
    components:{
		Button,UcInput
	},
    mounted(){},
    updated(){},
    methods:{
		upload(){
		  let file = document.getElementById('file');
		  file.click()
		},
		Reg(){
			let fromData = new FormData();// js类型
			fromData.append('username',this.username)
			fromData.append('password',this.password)
			let file = document.getElementById('file');
			fromData.append('icon',file.files[0])
			axios({
				url:'/api/reg',
				method:'post',
				data:fromData
			}).then((res)=>{
				if(res.data.err===0){
				  this.$router.replace('/login')
				}else{
				  this.errorMess=res.data.msg
				}
			})
		}
	}
  }
</script>

<style>
 .content{max-width:6.4rem; margin:0 auto;}
 .content .fhbtn{ padding-top:0.27rem;}
 .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
 .content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
 .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
 .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
 .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
 .content .login-box{ position:relative;}
 .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
 .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
 .content div.input{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
 .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
 
 .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>