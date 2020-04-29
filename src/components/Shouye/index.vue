<template>
	<div class="shouye">
		  <div class="header">
				<div class='container'>
								<div class="contleft">
							  	   <div  class='logo'><img src="/static/logo.png"></div>
										  <nav>
											  	<a href=''  class='active'>首页</a>
											  <a href=''>详情页</a>
										  </nav>
							  </div>
							  <div class='actions contright'>
							  	  <div class="denglu"   @click="login"></div>
							  	  <div class="zhuce"   @click="register"></div>
							  </div>
				</div>
		  </div>
			<div class="swiper-container"  ref="swiper">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide"><img src="/static/eg1.png"></div>
			            <div class="swiper-slide"><img src="/static/eg2.png"></div>
			            <div class="swiper-slide"><img src="/static/eg1.png"></div>
			            <div class="swiper-slide"><img src="/static/eg2.png"></div>
			            <div class="swiper-slide"><img src="/static/eg1.png"></div>
			        </div>
			        <!-- Add Pagination -->
			        <div class="swiper-pagination"></div>
			   </div>
		   <div class="footer">
		   	     <h2>海量流量的营销资源平台</h2>
		   </div>
		   <Login v-show="isLogin"  :center="url" @forLogin="forLoginFn"></Login>
		   <Register  v-show="isRegister" :center="isRegister" :newcenter="isLogin"  @forRegister="forRegisterFn"></Register>	   
	</div>	   
</template>

<script>

import Login from '@/components/Login';
import Register from '@/components/Register';


export default {
  name: 'Shouye',
  data () {
    return {
    	isLogin:false,
    	isRegister:false,
      url:'/api/user/login'
    }
  },
  watch:{

    },
    components : {
        Login,
        Register
    },
    mounted(){
    	   let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
          var swiper = new Swiper(this.$refs.swiper , {
                   pagination:{
				          el:'.swiper-pagination',
				          clickable:true,
				        },
                    loop:'true',
                    observer:true,
                    autoplay:1000,
                    speed:600,
   			 });

    },
    methods:{
    	 login(){
    	  		if(!this.isRegister){
               this.isLogin = true;
            }
            else{
              return
            }
    	  },
    	  register(){
            if(!this.isLogin){
                this.isRegister = true
            }
    	  	  else{
              return
            }
    	  },
          forLoginFn(val1,val2){
                  this.isLogin = val1;
                  this.isRegister = val2;
                  console.log(val1,val2)
        },
          forRegisterFn(val1,val2){
               this.isRegister=val1;
               this.isLogin = val2
               console.log(val1,val2)
          }
    }      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{width: 100%;background: #19283F;height: 64px;}*, *::before, *::after{margin: 0;padding: 0;    box-sizing: border-box;}
.header .container{width: 1200px;display: flex;margin: 0 auto;height:64px;line-height: 64px;}
    .header .container nav a {
    display: inline;    height: 100%;    margin: 0 40px; position: relative;font-family: PingFangSC-Regular;
font-size: 16px;color:  #C2C5CC;  transition: color 0.1s ease-in;text-decoration: none;border-bottom: none;padding-bottom:7px; }
    .header .container nav a:hover,.header .container nav a.active{color: #3D9FFF;    font-family: PingFangSC-Medium;border-bottom: solid 2px #3D9FFF; }
    .header .container >div  .logo{width: 133px;height: 30px;    line-height: 78px;    display: inline-block;    float: left;}.nav{    margin-top: 7px;}
    .logo img{width: 100%}
    nav{flex-shrink: 1;flex-grow:1;margin-left: 208px;    height: 100%;}
    .header .container >div{float: left;    display: inline-block;    width: 84%;}
    .header .container >div.contright{float: right;width: 200px;line-height: 90px;}
    .actions{flex-shrink:0;flex-grow:0;}
    .contright>div{width: 84px;height: 33px;    display: inline-block;}
    .denglu{background: url(/static/login.png) no-repeat top left;background-size: 100% 100%;}
    .zhuce{background:url(/static/register.png) no-repeat top left; background-size: 100% 100%;margin-left:15px }
	.footer{width: 100%;background: #fff;text-align: center;}
	.footer h2:after{display: block;    content: "";    width: 24px;  height: 4px;
    margin: 16px auto 12px;    border-radius: 2px;background-image: linear-gradient(90deg,#4bf5ff,#2f6aff);}

    .swiper-slide img{    width: 100%; height: 100%;}
     .v-enter, .v-leave-to{opacity:0}
  .v-enter-active, .v-leave-active{transition:opacity 0.8s}
</style>
