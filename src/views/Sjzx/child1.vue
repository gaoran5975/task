<template>
  <div class="sygg">
      <div class="container">
           <div class="zxgg">
                <h2>广告创建成功</h2>
               <el-table
                :data="tableData"
                border
                style="width: 100%"
               id="zxtable" @cell-click="Cellclick" >
                        <el-table-column
                          prop="appName"
                          label="应用名称"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="createTime"
                          label="创建时间"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="appType"
                          label="产品类型">
                        </el-table-column>
                        <el-table-column
                          prop="appVersion"
                          label="平台版本">
                           <template slot-scope="scope">
                            <a @click="cancelDialog(scope.row)" style="color:blue;cursor:pointer">{{scope.row.appVersion}}</a>
                        </template>
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="推广计划/进行中计划">
                        </el-table-column>
                  </el-table>
           </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'',
  data () {
    return {
      tableData: [{
          appName:'百度输入法',
          createTime:'2016-05-02',
          appType: '百度输入法',
          appVersion:'安卓',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
           appName:'和平精英',
          createTime:'2016-05-03',
          appType: '百度输入法',
          appVersion:'安卓',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
           appName:'和平精英',
          createTime:'2016-05-04',
          appType: '百度输入法',
          appVersion:'安卓',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
           appName:'百度输入法',
          createTime:'2016-05-05',
          appType: '百度输入法',
          appVersion:'安卓',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
    methods:{
      //某行点击事件
      Cellclick(row,column,event,cell,rowIndex){
           console.log(row)
          console.log(1,row.appName,rowIndex)
      },
       // 确定选择案件
        cancelDialog(row) {
            console.log(row)
    }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.container{width: 1200px;margin: 0 auto;}
 .el-table .warning-row {
    background: red;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>