<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{menuItem.menuName}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="text-line"></div>

      <div style="margin: 20px 0px;float: left">
        <el-row>
          <el-button type="success" icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-plus" circle @click="addApiInfo"></el-button>
          <el-button type="warning" icon="el-icon-edit" circle @click="isVisiable = true"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <el-button type="primary" round @click="getApiInfo">查询</el-button>
          <el-button type="primary" round>生成文档</el-button>
        </el-row>
      </div>
      <div>
        <el-dialog title="修改菜单信息" :visible.sync="isVisiable">
          <el-form >
             <el-form-item label="菜单名称" label-width="120px">
               <el-input v-model="menuName" autocomplete="off"></el-input>
             </el-form-item>
           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="isVisiable = false">取 消</el-button>
             <el-button type="primary" @click="editMenuName">确 定</el-button>
           </div>
        </el-dialog>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
      data(){
        return{
          menuItem: '',
          isVisiable: false,
          menuName: ''
        }
      },

      methods:{
        init(){
          this.getApiInfo()
        },
        editMenuName(){
          let vm = this
          var params = new URLSearchParams();
          params.append("menuId",this.menuItem.menuId)
          params.append("menuName",this.menuName);
          axios.post('/updateMenuName',params)
            .then(function (response) {
              if(response.data.success){
                vm.isVisiable = false
                vm.bus.$emit("updateMenuName",true)
              }
          }).catch(function (error) {

          })
        },
        getApiInfo(){
          this.$router.push({name: 'apiList'})
        },
        addApiInfo(){
          this.$router.push({name: 'addApiInfo'})
        }
      },
      mounted(){
        this.init()
        let vm = this
        this.bus.$on("menuItem",function (item) {
          vm.menuItem = item
        })
      }
    }
</script>

<style scoped>
.text-line{
  border-bottom: black 0.5px solid;
  margin-top: 10px;
}
</style>
