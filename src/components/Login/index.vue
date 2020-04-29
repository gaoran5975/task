<template>
        <div class='ant-modal-content' ref='ant-content'>
              <button type="button"  class="ant-modal-close"  @click="removeall"><span class="ant-modal-close-x"><i aria-label="图标: close" class="anticon anticon-close ant-modal-close-icon"><svg viewBox="64 64 896 896" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></span></button>
              <div class=ant-modal-body>
              <h2>登录</h2>
              <div class="dlk" style="position:relative;">
                  <span class="login-modal__input">
                      <input class="ant-input" type="text" placeholder="用户名" name="mobile" value="mobile"  v-model="mobile" @focus="clearerrorFlag()">
                    </span>
                    <span class="login-modal__input">
                       <input class="ant-input" type="password" placeholder="密码" name="password" value="password" v-model="password"  @focus="clearerrorFlag()">
                    </span>
                    <div v-show="errorFlag" class="tishi"   @click="removetishi">
                          <i aria-label="图标: close-circle" class="anticon"><svg viewBox="64 64 896 896" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg></i>
                          {{errorInfo}}
                    </div>
              </div>
              <button type="button" class="ant-btn submit-btn" @click="handleToLogin"><span>登 录</span></button>
              <div class="login-modal__other-fields">
                <a class="login-modal__zhuce"  href="javascript:;" @click="goRegister">注册</a>|
                <a class="login-modal__wjmm" href="">忘记密码&nbsp;</a>
              </div>
        </div>

    </div>
</template>

<script>
export default {
    name : 'Login',
    props:{
        center: {
            type:String,
            required:true
        }
    },
    data(){
        return{
            mobile: "",
            password: "",
            disabled : false,
            errorFlag: false,
             tswz:["请输入用户名和密码","请输入用户名","请输入密码","请输入有效的手机号码","手机号或密码不正确"],
             errorInfo:'',
             loginurl:''
        }
    },
    mounted(){
         this.loginurl = this.center
    },
    methods:{
        handleToLogin(){
               console.log(this.mobile,this.password,this.center)
               if(this.mobile ==''){
                  this.errorInfo = this.tswz[1]
                   this.errorFlag = true;
                   return
               }
                else if(this.mobile !='' && this.password ==''){
                  this.errorInfo = this.tswz[2]
                   this.errorFlag = true;
                   return 
               }
               else{
                     var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
                     if (!myreg.test(this.mobile)) {
                           this.errorInfo = this.tswz[3]
                           this.errorFlag = true;
                           return 
                     }
                      else{
                          this.axios.post('/api/user/login?loginMethod=1&mobile='+this.mobile+'&password='+this.password).then((res)=>{
                          console.log(res)
                          var status = res.data.code;
                          var This = this;
                          if(status === 500){
                                this.errorInfo = this.tswz[4]
                               this.errorFlag = true;
                               return 
                          }
                          else{
                              // this.$store.commit('GET_USER', data.company) 存储用户名  展示时候用 {{this.$store.state.company}}   
                                // This.$router.push('/mine/center');
                          }
                      });
               }
            }    
       },
        //开始输入时候关闭提示
        clearerrorFlag(){
               this.errorFlag = false;
        },   
        //提示关闭提示    
        removetishi(){
           this.errorFlag = false;
        },
        //关闭登陆页
        removeall(){
          this.mobile = '';
          this.password = '';
           this.$emit('forLogin',false,false);
        },
        //去注册
        goRegister(){
          this.$emit('forLogin',false,true);
        }
    }
}
</script>

<style scoped>
.ant-modal-content{position: relative;    background-color: #fff; background-clip: padding-box;
    border: 0;    border-radius: 4px;box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);width: 328px;height: 400px;position: absolute;top: 150px;left: 50%;z-index: 200;margin-left:-164px; }
  .ant-modal-content h2{text-align: center;margin-bottom: 15px;font-size: 20px;color: #333333;    font-weight: normal;}
  .ant-modal-close {    position: absolute;top: 0;    right: 0;    z-index: 10; padding: 0;    color: rgba(0, 0, 0, 0.45);
    font-weight: 700;    line-height: 1; text-decoration: none;  background: transparent;border: 0;    outline: 0;cursor: pointer;transition: color 0.3s;}
  .ant-modal-body{font-size: 14px;    line-height: 1.5;    word-wrap: break-word;padding: 32px 40px;}
  .login-modal__input{box-sizing: border-box;
        margin: 0;padding: 0;   color: rgba(0, 0, 0, 0.65);    font-size: 14px;    font-variant: tabular-nums;
        line-height: 1.5;    list-style: none;    font-feature-settings: 'tnum';    position: relative;
        display: inline-block;    width: 100%;    text-align: start;    margin-bottom: 12px;}
  .login-modal__input  input.ant-input {
        height: 30px;    font-size: 14px;margin-top: 12px;padding-left: 0;  border: 0;        border-bottom: 1px solid #e8e8e8; border-radius: 0;width: 100%;}
   .login-modal__input  input.ant-input:focus {
        box-shadow: none;
        border-radius: 0;background: none
      }
  .ant-btn.submit-btn{display: block;margin: 30px auto 24px;    outline: none;    width: 248px;height: 42px;
    background-image: linear-gradient(179deg, #306CFF 0%, #52F3FF 100%, #D8D8D8 100%);border-radius: 21px;    color: #fff;    font-size: 14px;cursor: pointer;border: 0;}
    .login-modal__other-fields{text-align: center; font-size: 14px;color: #dee4f5;}   
    .login-modal__other-fields a{padding: 0 24px;font-size: 14px;  color: #999;    line-height: 20px;cursor: pointer;text-decoration: none;}  
    .ant-modal-close-x {    display: block;   width: 56px;    height: 56px;    font-size: 16px;    font-style: normal;
    line-height: 56px;    text-align: center;    text-transform: none;    text-rendering: auto;}
    .addauthCode{position: absolute;top: 38%; z-index: 2;    color: rgba(0, 0, 0, 0.65);  display: block;right: 0;height: 23px;}
    input{border:0;outline:none;}
    .tishi{color: #F23340;    font-size: 12px;    line-height: 24px;position: absolute;left:0;bottom: -20px;display: flex;align-items: center;
    margin-top: 0px;    background: rgba(255, 84, 84, 0.08);border-radius: 2px;border: 1px solid #F23340;    padding: 0 12px;width: 223px;}
    .anticon{display: inline-block;color: inherit;font-style: normal;    line-height: 0;    text-align: center; text-transform: none;    vertical-align: -0.125em;    text-rendering: optimizeLegibility;    -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;font-size: 14px; padding-right: 8px;}
</style>
