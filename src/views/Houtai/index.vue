<template>
	<div class="header">
			      <el-container>
					          <el-header style="height:64px">
					                <el-row>
							         		<div class='container'>
							                          <el-col :span="9">
							                              		<div  class='logo'><img src="/static/logo.png"></div>
									                                      <nav>
									                                          <router-link tag='a' to="/houtai/sy" href='javascript:;'>首页<span>__</span></router-link>
									                                          <router-link tag='a'  to="/houtai/gggl"  href='javascript:;'>广告管理<span>__</span></router-link>
									                                          <router-link tag='a'  to="/houtai/sjzx"   href='javascript:;' >数据中心<span>__</span></router-link>
									                                      </nav>
							                            </el-col>
							                            <el-col :span="15">
							                                 		<div class="grid-content bg-purple-light">
							                                                    <select v-model="selectvalue"     @change="changeProduct($event)" placeholder="全能互动（北京）科技有限公司">
							                                                          <option value="全能互动（北京）科技有限公司">全能互动（北京）科技有限公司</option>
							                                                          <option v-for="item in kindList" v-bind:value="item.name" v-text="item.name"></option>
							                                                        </select>
							                                		</div>
							                            </el-col>
							                </div>
							        </el-row>          
					        </el-header>      
				</el-container>    
				<router-view/>
	</div>
</template>
<script type="text/javascript">
   
   import Htshouye from '@/components/Htshouye';

   export default {
    name : 'Houtai',
    components : {
        Htshouye
      },
    data(){
    	return {
    			 kindList:[{name:"小可爱",id:1},{name:"小仙女",id:2},{name:"小宝龙",id:3}],
          		 selectvalue:{},
    	}
    },
    mounted(){

    },
    methods:{
    	 changeProduct(){

    	 }
    }
}

</script>
<style scoped>
.header{height: 64px}
    .el-container {
  height: 100%;
}
 .el-header, .el-footer {
    background: #19283F; color: #333;text-align: center; }
  
  .el-aside { background-color: #D3DCE6;
    color: #333; text-align: center; line-height: 200px;
  }
  
  .el-main {
    background: #F4F7F9;
    text-align: center;line-height: 160px;padding: 0
  }
  
  body > .el-container {margin-bottom: 40px;
  }
  .el-col { border-radius: 4px; }
  .bg-purple-dark {background: #99a9bf;}
  .bg-purple { background: #d3dce6;}
  .bg-purple-light {display: flex;flex-direction:row;height: 64px;justify-content: flex-end;line-height: 64px}
  .row-bg {    padding: 10px 0; background-color: #f9fafc }
  a.cur{color: #3D9FFF;    font-family: PingFangSC-Medium;}
  .container{width: 1200px;margin: 0 auto;}
  select{width:227px;height: 20px;margin-top: 25px;margin-bottom: 5px;margin-left: 10px;font-family: PingFangSC-Regular;font-size: 14px;color: #C2C5CC;    background: #19283F;border-color: transparent;}
  select option{font-family: PingFangSC-Regular;font-size: 14px;color: #C2C5CC;}
  .header .container >div  .logo{width: 133px;height: 30px;    line-height: 78px;    display: inline-block;    float: left;}.nav{    margin-top: 7px;}
    .logo img{width: 100%}
    nav{flex-shrink: 1;flex-grow:1;margin-left: 208px;    height: 100%;display: flex;flex-direction:row;justify-content:space-between;line-height: 64px;}
    nav a{ont-family: PingFangSC-Regular;font-size: 16px;color: #C2C5CC;text-decoration: none;position: relative;}
    nav a.cur{color: #00A0FF;}
    nav a span{color: #00A0FF;position: absolute;bottom: 10px;width: 100%;text-align: center;left: 0;width:19px;height: 3px;    display: block;    background: #00A0FF;overflow: hidden;z-index: 10;display: none}
    nav a:nth-child(1) span{ left: 6px}nav a:nth-child(2) span{ left: 23px}nav a:nth-child(3) span{ left: 23px}
    nav a.cur span{display: block;}
    h3{font-size: 18px;color: #333333;line-height: 60px;text-align: left;    padding-left: 30px;}
     .router-link-active{color: #00A0FF;}
    .router-link-active span{display: block;} 

</style>