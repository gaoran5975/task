<template>
  <div class="child2">
       <el-main>
              <div class="container" id="xjgg">
                    <h3>新建广告</h3>
                     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                              <el-form-item label="广告名称" prop="appName">
                                <el-input v-model="ruleForm.appName"   placeholder="应用名称"></el-input>
                              </el-form-item> 
                                <el-form-item label="版本平台" prop="platform">
                                      <el-radio-group v-model="ruleForm.platform">
                                            <el-radio label="苹果"></el-radio>
                                            <el-radio label="安卓"></el-radio>
                                        </el-radio-group> 
                              </el-form-item> 
                              <el-form-item label="应用场景">
                                  <h4>如果您的应用类型属于以下垂直场景，请选择</h4> 
                                      <el-radio-group v-model="ruleForm.appType">
                                             <el-radio-group v-model="ruleForm.appType" size="medium">
                                                      <el-radio label="标准类"></el-radio>
                                                      <el-radio label="电商类"></el-radio>
                                                      <el-radio label="游戏类"></el-radio>
                                              </el-radio-group>        
                                        </el-radio-group> 
                              </el-form-item>
                              <el-form-item label="下载链接" prop="downloadUrl">
                                      <el-input v-model="ruleForm.downloadUrl"   placeholder=""></el-input>
                              </el-form-item> 
                               <el-form-item label="数据检测链接" prop="downloadUrl">
                                     <el-input v-model="ruleForm.downloadUrl"   placeholder=""></el-input>
                              </el-form-item> 
                              <el-form-item label="所属行业">
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
                              <el-form-item size="large">
                                      <el-button>取消</el-button>
                                      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                              </el-form-item>                   
                </el-form>
                     
              </div>
          </el-main>
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

    h3{font-size: 18px;color: #333333;line-height: 60px;text-align: left;    padding-left: 30px;}
    form{margin-left: 50px;font-family: PingFangSC;font-size: 12px;color: #333333;}
</style>
