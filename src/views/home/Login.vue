<template >
  <div>
    <p style="font-size: 30px;text-align: center;color: #409eff;margin-top: 100px">接口文档系统</p>
    <el-input v-model="username" placeholder="请输入用户名" type="text"class="text-info"></el-input>

    <div style="margin-top: 15px;">
      <el-input v-model="password" placeholder="请输入密码" type="password"  class="text-info" ></el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-button type="primary" @click="login()" :plain="true">登录</el-button>
    </div>
  </div>
</template>
<style>
  .text-info{
    width: 400px;
    margin-top: 20px;
  }
</style>
<script>
  import axios from 'axios'
  import {saveObject,removeObject} from "../../config/help";

  export default {
    data () {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods:{
      login: function(){
        if(!this.username){
          this.$message({
            message:"用户名不能为空",
            type:'warning'
          })
          return
        }

        if(!this.password){
          this.$message({
            message:"密码不能为空",
            type:'warning'
          })
          return
        }

        let vm = this;
        axios.get('/login',{
          params: {
            userName: this.username,
            password: this.password
          }
        }).then(function (response) {
          if(response.data.success) {
            saveObject("userInfo",response.data.data)
            vm.$message({
              message:response.data.message,
              type:'success'
            })
            vm.$router.push({name:'home'})
          }else {
            vm.$message({
              message:response.data.message,
              type:'warning'
            })
          }
        }).catch(function (error) {

        })

      }
    }
  }
</script>
