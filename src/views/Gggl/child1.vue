<template>    
    <div id="gggl" ref="gggl">
        <div class="container">
            <div class="handle-box">
              <el-button type="primary"  @click="handleSearch">搜索</el-button>
                    <div class="elselect">
                  <el-input placeholder="请输入" v-model="yymc" class="input-with-select">
                    <el-select v-model="select"   slot="prepend" placeholder="应用名称">
                      <el-option label="应用名称" value="应用名称"></el-option>
                    </el-select>
                  </el-input>
            </div>
                    <div class="elselect elsel2">
                      <span>系统</span> 
              <el-select v-model="xitong" placeholder="所有系统">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </div>
            <div class="elselect elsel2">
              <span>状态</span> 
              <el-select v-model="zhuangtai" placeholder="所有状态">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </div>
                </div>
                <div class="tablecont">
                    <h2><el-button type="primary"  @click="tjgg">+ 添加广告</el-button></h2>
                    <el-table
                  :data="tableData"
                  border
                  style="width: 100%"
                  class="table" @cell-click="Cellclick" id="gltable" >
                  <el-table-column
                    prop="date"
                    label="应用名称/ID"
                    width="230">
                  </el-table-column class="col1">
                  <el-table-column
                    prop="name"
                    label="系统"
                    width="230">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="状态"
                    width="230">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="昨日消耗"
                    width="230">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="广告计划"
                    width="278">
                  </el-table-column>
                </el-table>   
               <div class="block">
                   <el-pagination
                      layout="prev, pager, next"
                      :total="50">
                    </el-pagination>
               </div>
                </div>
        </div>
        <router-view />    
    </div>
</template>
<script type="text/javascript">
   
   export default {
    name : 'Ggglcd1',
    components : {
      
      },
    data(){
      return {
        yymc:'应用名称',
        mryy:'应用名称',
        xitong:'所有系统',
        zhuangtai:'所有状态',
        select:'',
         tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }]
      }
    },
    mounted(){
      this.$refs.gggl.style.height = window.innerHeight-64+'px';
        // this.axios.post('/api/adver/getAdverApp?current=1',{
      //                     size:10
      //                 }).then((res)=>{
      //              var msg = res.data.msg;
      //              console.log(res)
      //           })
         this.axios.post('/api/adver/getAdverApp?current=1&size=10').then((res)=>{
              console.log(res)
         })
    },  
    methods:{
        
        handleSearch(){
            console.log(this.yymc,this.xitong,this.zhuangtai)
        },
        tjgg(){
           // 路由传参
          this.$router.push({path: '/houtai/gggl/child2',query:{name: 'wo'}})  
        },
        Cellclick(row,column,event,cell){
                  console.log(1,row.name)
                  // console.log(2,column)
                  // console.log(3,event)
                  // console.log(4,cell)
                  
          }
    }
}

</script>
<style scoped>
    *{box-sizing:border-box; }
    #gggl{background: #F4F7F9;height: 100%;    box-sizing: border-box;}
    .container{width: 1200px;margin: 0 auto}
    .handle-box{margin-bottom: 20px;height: 59px;padding: 15px;line-height: 59px}
    .elselect{display: inline-block;margin-right: 35px;height: 28px}
    .el-input-group__prepend{padding: 0 5px}
    .el-input-group{width: 227px}
    .elsel2 .el-select{width: 171px}
  span{margin-right: 20px;font-family: PingFangSC;
font-size: 14px;color: #333333;}
  .el-button{margin-right: 30px}
    .el-table >>> th {
        background-color:  #F8F9FA;padding: 20px 15px 20px
  }
  .handle-box button{height: 28px;line-height: 3px}
  .el-input-group,.el-input-group__prepend{height: 28px}
  .tablecont{border-radius: 4px;background: #fff;    padding-top: 2px;}
  h2{margin: 24px 0}
  .el-table .warning-row {
       background: #F8F9FA;
    }
</style>