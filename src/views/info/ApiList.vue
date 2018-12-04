<template>
    <div style="margin-top: 100px">
      <el-table
        :data="apiList"
        height="550"
        border>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="apiUrl"
          label="接口url"
          width="180">
        </el-table-column>
        <el-table-column
          prop="apiName"
          label="接口名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="methodType"
          label="请求方式"
          width="120">
        </el-table-column>
        <el-table-column
          prop="creatorName"
          label="创建者"
          width="120">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="180">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="160">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="goDetail(scope.row)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 50px;text-align: center">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        data(){
          return{
            apiList: [],
            menuId: 0
          }
        },
      methods:{
        init(){
          let params = this.$route.params
          this.menuId = params && params.menuId
          this.getDataList()
        },
        getDataList(){
          let vm = this;
          axios.get("/getApiList",{
            params: {
              menuId: this.menuId
            }
          }).then(function (data) {
            if(data && data.data.success){
              vm.apiList = data.data.data
            }else{

            }
          }).catch(function (error) {

          })
        },
        goDetail(row){
          console.log(row)
          this.$router.push({
            name: 'apiInfoDetail',
            params: {
              apiInfo: row
            }
          })
        }
      },
      mounted(){
          this.init();
          let vm = this;
        this.bus.$on("menuItem",function (item) {
          vm.menuId = item.menuId
          vm.apiList.splice(0,vm.apiList.length)
          vm.getDataList()
        })
      }
    }
</script>

<style scoped>

</style>
