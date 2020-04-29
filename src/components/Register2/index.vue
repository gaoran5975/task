<template>
        <el-main>
              <div class="container" ref="jbxx">
                    <h3>基本信息填写</h3>
                     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm"> 
                              <el-form-item label="公司名称" prop="name">
                                <el-input v-model="ruleForm.name"   placeholder="请填写"></el-input>
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
                               <el-form-item label="商务联系人信息"  required class="elform7">
                                      <el-form-item prop="companyBodyImg"> 
                                            <el-select  v-model="ruleForm.companyBodyImg" placeholder="冯泽阳">
                                                  <el-option label="区域一" value="shanghai"></el-option>
                                                  <el-option label="区域二" value="beijing"></el-option>
                                            </el-select>
                                      </el-form-item>         
                               </el-form-item>
                               <el-form-item size="large">
                                      <el-button>取消</el-button>
                                      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                              </el-form-item>         
                     </el-form>
              </div>
          </el-main>
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
                name: '',
                companyCreditCode: '',
                companyAddress: '',
                companyMobile: '',
                companyBankAccountName: '',
                companyBankAccount: '',
                companyBankAddress: '',
                contactsName: '',
                contactsEmail: '',
                contactsAddress:'',
                companyBodyImg:''
            },
            rules: {
                name: [
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
                ],
                companyBodyImg:[
                  { required: true, message: '请输入冯泽阳', trigger: 'change' }
                ],
            }    
        }
           
    },
     mounted(){
          // this.$refs.jbxx.style.height = window.innerHeight-64+'px';
    },
    methods:{
             changeProduct () {
          console.log(this.selectvalue)
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(this.ruleForm.companyBankAddress)
              this.axios.post('/api/user/getCompanyInfo',{
                          name : this.ruleForm.name,
                          companyCreditCode : this.ruleForm.companyCreditCode,
                          companyAddress : this.ruleForm.companyAddress,
                          companyMobile : this.ruleForm.companyMobile,
                          companyBankAccountName : this.ruleForm.companyBankAccountName,
                          companyBankAccount : this.ruleForm.companyBankAccount,
                          companyBankAddress : this.ruleForm.companyBankAddress,
                          contactsName : this.ruleForm.contactsName,
                          contactsEmail : this.ruleForm.contactsEmail,
                          contactsAddress : this.ruleForm.contactsAddress,
                          companyBodyImg : this.ruleForm.companyBodyImg
                      }).then((res)=>{
                          console.log(res)
                          var status = res.data.status;
                          var This = this;
                          if(status === 0){

                                      // This.$router.push('/mine/center');
                          }
                          else{
                               
                          }

                      });
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
  /*#jbxx{width: 1000px}*/
    h3{font-size: 18px;color: #333333;line-height: 60px;text-align: left;    padding-left: 30px;}
    form{margin-left: 50px;font-family: PingFangSC;font-size: 12px;color: #333333;}
    .elform1{width: 800px}
    .el-form-item__label{text-align: left;}
    #jbxx .elform1 .el-form-item__content{width: 312px;    margin-left: 110px;}
    #jbxx .elform2 .el-form-item__content{width: 312px;    margin-left: 110px;}
    #jbxx .elform3 .el-form-item__content{width: 312px;    margin-left: 110px;}
    #jbxx .elform4 .el-form-item__content{width: 312px;    margin-left: 110px;}
    #jbxx .elform5 .el-form-item__content{width: 650px;    margin-left: 110px;}
    #jbxx .elform6 .el-form-item__content{width: 780px;    margin-left: 110px;}
    #jbxx .elform7 .el-form-item__content{text-align: left;} 
    #jbxx .el-form-item__content .el-input__inner{height: 30px;line-height: 30px;padding: 0 5px}
</style>
