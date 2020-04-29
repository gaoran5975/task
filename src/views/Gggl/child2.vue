<template>
  <div class="child2">
       <el-container>
              <div class="container" id="xjgg">
                     <el-row style="font-family: PingFangSC;font-size: 12px;color: #006AFF;">
                              <el-button type="text" id="fanhui">< 返回</el-button>
                     </el-row>
                     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  style="background:#fff">
                              <el-row>
                                       <h3>新建广告</h3>
                                        <el-form-item label="广告名称" prop="appName" class="elform1">
                                          <el-input v-model="ruleForm.appName"   placeholder="应用名称"></el-input>
                                        </el-form-item> 
                                          <el-form-item label="版本平台" prop="platform"  class="elform2">
                                                <el-radio-group v-model="ruleForm.platform">
                                                      <el-radio label="1" style="background:url('/static/anzhuo.png') no-repeat 25px  top"></el-radio>
                                                      <el-radio label="2"  style="background:url('/static/anzhuo.png') no-repeat 25px  top"></el-radio>
                                                  </el-radio-group> 
                                        </el-form-item> 
                                       <el-row style="background: #F4F7F9;width:979px;padding-left:32px;padding-top:32px;    margin-bottom: 33px;">
                                                 <el-form-item label="应用场景">
                                                  <span style="color:#999999;font-size:12px;">如果您的应用类型属于以下垂直场景，请选择</span> 
                                                         <el-row>
                                                               <el-radio-group v-model="ruleForm.appType" class="form-yycj">
                                                                     <el-radio-group v-model="ruleForm.appType" size="medium">
                                                                              <el-radio label="标准类" class="radio1"></el-radio>
                                                                              <el-radio label="电商类"  class="radio2"></el-radio>
                                                                              <el-radio label="游戏类"  class="radio3"></el-radio>
                                                                      </el-radio-group>        
                                                                </el-radio-group> 
                                                          </el-row>
                                                </el-form-item> 
                                       </el-row>
                                        <el-form-item label="下载链接" prop="downloadUrl" class="elform1">
                                                <el-input v-model="ruleForm.downloadUrl"   placeholder=""></el-input>
                                        </el-form-item> 
                                         <el-form-item label="数据检测链接" prop="downloadUrl"  class="elform1">
                                               <el-input v-model="ruleForm.downloadUrl"   placeholder=""></el-input>
                                        </el-form-item> 
                                        <el-form-item label="所属行业"  class="elform1">
                                               <el-col :span="14">       
                                                    <el-select v-model="ruleForm.downloadUrl" placeholder="开户行">
                                                          <el-option label="区域一" value="shanghai">
                                                          </el-option>
                                                    </el-select>
                                               </el-col> 
                                               <el-col class="line" :span="1">-</el-col>          
                                              <el-col :span="9"> 
                                                    <el-input v-model="ruleForm.downloadUrl"  placeholder="银行账号"></el-input>
                                               </el-col>  
                                        </el-form-item>  
                              </el-row>
                              <el-row>
                                        <el-form-item size="large">
                                              <el-button>取消</el-button>
                                              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                          </el-form-item>        
                              </el-row>           
                  </el-form>
                     
              </div>
          </el-container>
  </div>
</template>

<script>

export default {
  name: 'Child2',
  data() {
      return {
        ruleForm: {
          appName: '',
          platform: '',
          appType: '',
          downloadUrl:''
        },
        rules: {
          appName: [
            { required: true, message: '请输入广告名称', trigger: 'blur' },
            { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
          ],
          platform: [
            { required: true, message: '请选择版本平台', trigger: 'change' }
          ],
          downloadUrl: [
            { required: true, message: '请输入下载链接', trigger: 'blur' }
          ],
        }
      };
    },
    created:function(){
        this.getParams();
    },
    methods: {
      // 缺少数据检测链接，所属行业参数
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');//有效
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getParams:function(){
          // 取到路由带过来的参数
          var routerParams = this.$route.query.name
          // 将数据放在当前组件的数据内
          console.log("传来的参数=="+routerParams)
      },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .container{width: 1200px;margin: 0 auto;}
    h3{font-size: 18px;color: #333333;line-height: 60px;text-align: left;}
    #fanhui{font-family: PingFangSC;font-size: 13px;color: #006AFF;    padding-left: 10px;margin-top: 10px;
    margin-bottom: 10px;}
    form{padding-left: 50px;font-family: PingFangSC;font-size: 12px;color: #333333;}
    /deep/ .el-form-item__label{text-align: left;padding: 0 5px 0 0;}
    /deep/ .elform1 .el-form-item__content{width: 312px;    margin-left: 110px;}
     /deep/ .elform2 .el-radio{width: 42px;    padding: 2px 0;color: transparent; }
    /deep/ .elform2  .el-radio__input.is-checked+.el-radio__label{color: transparent;}
    /deep/ .el-form-item__content .el-input__inner{line-height: 30px;height: 30px;padding: 0 5px;}
    .radio1{width:280px;height: 175px;background: url('/static/bg1.png') no-repeat top center; }
    .radio2{width:280px;height: 175px;background: url('/static/bg1.png') no-repeat top center; }
    .radio3{width:280px;height: 175px;background: url('/static/bg1.png') no-repeat top center; }
</style>
