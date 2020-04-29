<template>
  <div class="xxtx">
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
                                                  <div class="grid-content bg-purple-light" id="grxx">
                                                  </div>
                                          </el-col>
                              </div>
                      </el-row>          
                  </el-header>     
        </el-container>
        <el-container>
          <Loading v-if="isLoading" />          
                  <el-main   v-else >
                            <div class="container" id="jbxx"   ref="jbxx">
                                  <h3>基本信息填写</h3>
                                   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="125px" class="demo-ruleForm"> 
                                     <el-row style="background:#fff">
                                           <el-form-item label="公司名称" prop="companyBodyName"  class="elform1">
                                              <el-input v-model="ruleForm.companyBodyName"   placeholder="请填写"></el-input>
                                            </el-form-item>
                                            <el-form-item label="企业信用代码"  prop="companyCreditCode" class="elform2">
                                              <el-input v-model="ruleForm.companyCreditCode"  placeholder="请填写"></el-input>
                                            </el-form-item> 
                                            <el-form-item label="注册地址"    prop="companyAddress" class="elform3">
                                              <el-input v-model="ruleForm.companyAddress"  placeholder="请填写"></el-input>
                                            </el-form-item>
                                             <el-form-item label="注册电话"    prop="companyMobile"  class="elform4">
                                              <el-input v-model="ruleForm.companyMobile"  placeholder="请填写"></el-input>
                                            </el-form-item>
                                             <el-form-item label="银行信息" required class="elform5">
                                                 <el-col :span="7"> 
                                                        <el-form-item prop="companyBankAccountName">
                                                            <el-input v-model="ruleForm.companyBankAccountName"   placeholder="账户名称"></el-input>
                                                        </el-form-item>      
                                                  </el-col>
                                                  <el-col class="line" :span="1">-</el-col>    
                                                   <el-col :span="8"> 
                                                        <el-form-item prop="companyBankAccount">
                                                              <el-input v-model="ruleForm.companyBankAccount"   placeholder="银行账号"></el-input>
                                                        </el-form-item>        
                                                   </el-col>  
                                                  <el-col class="line" :span="1">-</el-col> 
                                                   <el-col :span="6">
                                                        <el-form-item prop="companyBankAddress">       
                                                              <el-select v-model="ruleForm.companyBankAddress" placeholder="开户行"  >
                                                                    <el-option  v-for="item in bankList" :key="item"  :label="item" :value="item">
                                                                    </el-option>
                                                              </el-select>
                                                        </el-form-item>        
                                                   </el-col>      
                                            </el-form-item>
                                             <el-form-item label="商务联系人信息"  required class="elform6">
                                                 <el-col :span="3"> 
                                                         <el-form-item prop="contactsName">
                                                              <el-input v-model="ruleForm.contactsName"    placeholder="联系人"></el-input>
                                                          </el-form-item>     
                                                  </el-col>
                                                  <el-col class="line" :span="1">-</el-col>    
                                                   <el-col :span="5"> 
                                                        <el-form-item prop="contactsEmail">      
                                                           <el-input v-model="ruleForm.contactsEmail"    placeholder="邮箱"></el-input>
                                                        </el-form-item>      
                                                   </el-col>  
                                                  <el-col class="line" :span="1">-</el-col> 
                                                   <el-col :span="4">
                                                      <el-form-item prop="contactsMobile">       
                                                           <el-input v-model="ruleForm.contactsMobile"   placeholder="电话"></el-input>
                                                      </el-form-item>        
                                                   </el-col>  
                                                   <el-col class="line" :span="1">-</el-col>   
                                                   <el-col :span="9">
                                                       <el-form-item prop="contactsAddress">       
                                                           <el-input v-model="ruleForm.contactsAddress"    placeholder="地址"></el-input>
                                                       </el-form-item>       
                                                   </el-col>      
                                            </el-form-item>
                                             <el-form-item label="商务联系人信息"  class="elform7">
                                                    <el-form-item > 
                                                          <el-select  v-model="ruleForm.Businesscontact" placeholder="冯泽阳">
                                                                <el-option label="区域一" value="shanghai"></el-option>
                                                                <el-option label="区域二" value="beijing"></el-option>
                                                          </el-select>
                                                    </el-form-item>         
                                             </el-form-item>
                                   </el-row>
                                    <el-row>
                                          <el-form-item size="large">
                                                    <el-button type="primary" @click="submitForm('ruleForm')">提交基本信息</el-button>
                                            </el-form-item> 
                                    </el-row>                 
                                   </el-form>
                            </div>
                 </el-main> 
        </el-container>
  </div>         
</template>

<script>
export default {
    name : 'Register2',
    props:{
         
    },
    data(){
            return  {
              bankList: ["中国工商银行","中国农业银行","中国建设银行"],
              ruleForm: {
                companyBodyName: '',
                companyCreditCode: '',
                companyAddress: '',
                companyMobile: '',
                companyBankAccountName: '',
                companyBankAccount: '',
                companyBankAddress: '',
                contactsName: '',
                contactsMobile:'',
                contactsEmail: '',
                contactsAddress:'',
                Businesscontact:'',
                companyid:''
                
            },
            rules: {
                companyBodyName: [
                  { required: true, message: '请输入公司名称', trigger: 'blur' },
                  { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
                ],
                companyCreditCode:[
                  { required: true, message: '请输入企业信用代码', trigger: 'blur' }
                ], 
                companyAddress:[
                  { required: true, message: '请输入注册地址', trigger: 'blur' }
                ],
                companyMobile:[
                  { required: true, message: '请输入注册电话', trigger: 'blur' }
                ],
                companyBankAccountName:[
                  { required: true, message: '请输入账户名称', trigger: 'blur' }
                ],
                companyBankAccount:[
                  { required: true, message: '请输入银行账号', trigger: 'blur' }
                ],
                companyBankAddress:[
                  { required: true, message: '请选择开户行', trigger: 'change' }
                ],
                contactsName:[
                  { required: true, message: '请输入联系人', trigger: 'blur' }
                ],
                contactsEmail:[
                  { required: true, message: '请输入邮箱', trigger: 'blur' }
                ],
                contactsMobile:[
                  { required: true, message: '请输入电话', trigger: 'blur' }
                ],
                contactsAddress:[
                  { required: true, message: '请输入地址', trigger: 'blur' }
                ]
            },
            isLoading: false,
            obj:{
              company :''
            }   
        }
           
    },
     mounted(){
          this.$refs.jbxx.style.height = window.innerHeight-89+'px';

    },
    methods:{
             changeProduct () {
          console.log(this.selectvalue)
        },
        submitForm(formName) {
              this.$refs[formName].validate((valid) => {
                  // console.log(1,this.$store.state.user.company,this.$store.state.user.id)
                  let paramsData = {
                      company:this.ruleForm.companyBodyName,
                      id : this.ruleForm.companyid
                  }
                 this.$store.commit('user/GET_USER',paramsData);
                 this.$router.push({path: '/houtai/sy'}) 
                if (valid) {
                  alert('submit!');
              
                    // this.axios.post('/api/user/getCompanyInfo',{
                    //               companyBodyName: this.ruleForm.companyBodyName,
                    //               companyCreditCode: this.ruleForm.companyCreditCode,
                    //               companyAddress: this.ruleForm.companyAddress,
                    //               companyMobile: this.ruleForm.companyMobile,
                    //               companyBankAccountName: this.ruleForm.companyBankAccountName,
                    //               companyBankAccount: this.ruleForm.companyBankAccount,
                    //               companyBankAddress: this.ruleForm.companyBankAddress,
                    //               contactsName:  this.ruleForm.contactsName,
                    //               contactsMobile:this.ruleForm.contactsMobile,
                    //               contactsEmail: this.ruleForm.contactsEmail,
                    //               contactsAddress:this.ruleForm.contactsAddress
                    //         }).then((res)=>{
                    //             console.log(res)
                    //             var status = res.data.status;
                                
                    //             if(status === 0){

                    //                         // This.$router.push('/mine/center');
                    //             }
                    //         });
                             // this.$router.push({path: '/houtai/sy'})  
                     }       
              });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
        onSubmit(){
              
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
    div  .logo{width: 133px;height: 30px;    line-height: 78px;    display: inline-block;    float: left;}.nav{    margin-top: 7px;}
    .logo img{width: 95%}
    nav{flex-shrink: 1;flex-grow:1;margin-left: 208px;    height: 100%;display: flex;flex-direction:row;justify-content:space-between;line-height: 64px;}
    nav a{ont-family: PingFangSC-Regular;font-size: 16px;color: #C2C5CC;text-decoration: none;position: relative;}
    nav a.cur{color: #00A0FF;}
    nav a span{color: #00A0FF;position: absolute;bottom: 10px;width: 100%;text-align: center;left: 0;width:19px;height: 3px;    display: block;    background: #00A0FF;overflow: hidden;z-index: 10;display: none}
    nav a:nth-child(1) span{ left: 6px}nav a:nth-child(2) span{ left: 23px}nav a:nth-child(3) span{ left: 23px}
    nav a.cur span{display: block;}
    h3{font-size: 18px;color: #333333;line-height: 60px;text-align: left;    padding-left: 30px;}
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
  .container{width: 1200px;margin: 0 auto;    background: #fff;}
  #jbxx{    margin-top: 25px;}
    h3{font-size: 18px;color: #333333;line-height: 60px;text-align: left;    padding-left: 30px;}
    form{margin-left: 50px;font-family: PingFangSC;font-size: 12px;color: #333333;    width: 920px;}
    /deep/ .elform1{width: 800px}
    /deep/ .el-form-item__label{text-align: left;padding: 0 5px 0 0;}
    /deep/ .elform1 .el-form-item__content{width: 312px;    margin-left: 110px;}
    /deep/ .elform2 .el-form-item__content{width: 312px;    margin-left: 110px;}
    /deep/ .elform3 .el-form-item__content{width: 312px;    margin-left: 110px;}
    /deep/ .elform4 .el-form-item__content{width: 312px;    margin-left: 110px;}
    /deep/ .elform7 .el-form-item__content{text-align: left;} 
    /deep/ .el-form-item__content .el-input__inner{height: 30px;line-height: 30px;padding: 0 5px}
    #grxx{display: none;}
</style>
