<template>
    <div style="margin-top: 100px">
      <el-table
        :data="tableData4"
        height="550"
        border>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="接口名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="请求方式"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="请求参数"
          width="240">
        </el-table-column>
        <el-table-column
          prop="address2"
          label="返回参数"
          width="240">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="160">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
    export default {
        data(){
          return{
            tableData4: [{
              date: '2016-05-03',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-02',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-04',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-01',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-08',
              name: 'GET/POST',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-06',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-07',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-07',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-07',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }, {
              date: '2016-05-07',
              name: 'GET',
              address: '上海市普陀区金沙江路 1518 弄',
              address2: '上海市普陀区金沙江路 1518 弄dfdsdsdsdsd'
            }]
          }
        }
    }
</script>

<style scoped>

</style>
