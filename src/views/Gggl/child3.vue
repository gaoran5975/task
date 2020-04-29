<template>
  <div class="child2">
       <el-main>
              <div class="container" id="xjgg">
                    <h3>创建广告计划</h3>
                     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                              <el-form-item label="广告名称" prop="appName">
                                  <el-select v-model="ruleForm.appName" placeholder="请选择">
                                                <el-option label="区域一" value="shanghai">
                                                </el-option>
                                   </el-select>
                              </el-form-item> 
                                <el-form-item label="出价" prop="unitPrice">
                                      <el-input v-model="ruleForm.unitPrice"   placeholder=""></el-input>元/CPC
                              </el-form-item> 
                              <el-form-item label="每日预算" prop="everydayBudget">
                                      <el-input v-model="ruleForm.everydayBudget"   placeholder=""></el-input>
                              </el-form-item> 
                              <el-form-item label="总预算" prop="totalBudget">
                                      <el-input v-model="ruleForm.totalBudget"   placeholder=""></el-input>
                              </el-form-item> 
                               <el-form-item label="推广方式" prop="putLocation">
                                  <el-select v-model="ruleForm.putLocation" placeholder="开屏">
                                                <el-option label="区域一" value="shanghai">
                                                </el-option>
                                   </el-select>
                              </el-form-item>
                               <el-form-item label="推广素材"　>
                                      <el-input 　 placeholder="对应推广方式提供素材"></el-input>
                              </el-form-item>
                              <el-form-item label="上传素材" required class="elform5">
                                   <el-col :span="7"> 
                                                <el-upload
                                                  class="avatar-uploader"
                                                  action="https://jsonplaceholder.typicode.com/posts/"
                                                  :show-file-list="false"
                                                  :on-success="handleAvatarSuccess"
                                                  :before-upload="beforeAvatarUpload">
                                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                    </el-col>
                                    <el-col class="line" :span="1">-</el-col>    
                                     <el-col :span="8"> 
                                            <el-upload
                                                  class="avatar-uploader"
                                                  action="https://jsonplaceholder.typicode.com/posts/"
                                                  :show-file-list="false"
                                                  :on-success="handleAvatarSuccess"
                                                  :before-upload="beforeAvatarUpload">
                                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                     </el-col>  
                                    <el-col class="line" :span="1">-</el-col> 
                                     <el-col :span="6">
                                               <el-upload
                                                  class="avatar-uploader"
                                                  action="https://jsonplaceholder.typicode.com/posts/"
                                                  :show-file-list="false"
                                                  :on-success="handleAvatarSuccess"
                                                  :before-upload="beforeAvatarUpload">
                                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                     </el-col>      
                              </el-form-item>
                              <el-form-item label="流量定位" prop="">
                                      <el-input　 placeholder=""></el-input>
                              </el-form-item>   
                              <el-form-item label="地域限制"　 prop="">
								    <el-checkbox-group v-model="ruleForm.type">
								      <el-checkbox label="北京" name="type"></el-checkbox>
								      <el-checkbox label="上海" name="type"></el-checkbox>
								    </el-checkbox-group>
							</el-form-item>
                              <el-form-item label="活动时间" required>
									           <el-form-item prop="date1">
                                    <el-date-picker
                                  v-model="value1"
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期">
                                </el-date-picker> 
                           </el-form-item> 
							　　</el-form-item> 
							 <el-form-item label="媒体类型"　 prop="">
								    <el-checkbox-group v-model="ruleForm.type">
										      <el-checkbox label="休闲游戏" name="type"></el-checkbox>
										      <el-checkbox label="音乐娱乐" name="type"></el-checkbox>
										      <el-checkbox label="美妆生活" name="type"></el-checkbox>
										      <el-checkbox label="办公高效" name="type"></el-checkbox>
										      <el-checkbox label="运动健康" name="type"></el-checkbox>
										      <el-checkbox label="美食生活" name="type"></el-checkbox>
										      <el-checkbox label="便捷工具" name="type"></el-checkbox>
										      <el-checkbox label="学习工具" name="type"></el-checkbox>
										      <el-checkbox label="生活方式" name="type"></el-checkbox>
										      <el-checkbox label="生活方式" name="type"></el-checkbox>
								    </el-checkbox-group>
							</el-form-item>       
							<el-form-item label="设置金额"　 prop="">
								    <el-checkbox-group v-model="ruleForm.type">
										      <el-checkbox label="500-1000元" name="type"></el-checkbox>
										      <el-checkbox label="500-1000元" name="type"></el-checkbox>
										      <el-checkbox label="2001-3000元" name="type"></el-checkbox>
										      <el-checkbox label="3001-5000元" name="type"></el-checkbox>
										      <el-checkbox label="5001元以上" name="type"></el-checkbox>										
								    </el-checkbox-group>
							</el-form-item>   
							<el-form-item label="系统版本"　 prop="">
								    <el-checkbox-group v-model="ruleForm.type">
										      <el-checkbox label="IOS 9" name="type"></el-checkbox>
										      <el-checkbox label="IOS 10" name="type"></el-checkbox>
										      <el-checkbox label="IOS 11" name="type"></el-checkbox>
										      <el-checkbox label="IOS 12" name="type"></el-checkbox>										
								    </el-checkbox-group>
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
  name: 'Child3',
  data() {
      return {
        ruleForm: {
          appName: '',
          unitPrice: '',
          appType: '',
          downloadUrl:'',
          type: [],
        },
        rules: {
          appName: [
            { required: true, message: '请选择广告名称', trigger: 'change' }
          ],
          unitPrice: [
            { required: true, message: '请输入单价', trigger: 'blur' }
          ],
          everydayBudget: [
            { required: true, message: '请输入每日预算', trigger: 'blur' }
          ],
          totalBudget: [
            { required: true, message: '请输入预算', trigger: 'blur' }
          ],
          putLocation: [
            { required: true, message: '请选择推广方式', trigger: 'change' }
          ],
           type: [
            { type: 'array', required: true, message: '请至少选择一个流量限制', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
        },
         value1: '',
        imageUrl: ''
      };
    },
    methods: {
      // everydayBudget，totalBudget 是number需要转换
      // 无流量定位参数
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');//有效
          } else {
            // console.log(this.value1[1])
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .container{width: 1200px;margin: 0 auto;}

    h3{font-size: 18px;color: #333333;line-height: 60px;text-align: left;    padding-left: 30px;}
    form{margin-left: 50px;font-family: PingFangSC;font-size: 12px;color: #333333;}
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
