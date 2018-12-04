<template>
  <div style="margin-top: 100px">
      <el-tabs v-model="addType">
        <el-tab-pane label="手动" name="1"></el-tab-pane>
        <el-tab-pane label="自动" name="2"></el-tab-pane>
      </el-tabs>
    <div style="margin-top: 20px;">
      <el-form :model="apiInfoForm" ref="apiInfoForm" label-width="100px">
        <el-form-item prop="email" label="IP地址" class="form-item" v-show="addType == 2">
          <el-input v-model="ipAddress"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="接口地址" class="form-item">
          <el-input v-model="apiInfoForm.apiAddress"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="接口名称" class="form-item">
          <el-input v-model="apiInfoForm.apiName"></el-input>
        </el-form-item>

        <el-form-item label="请求方式">
          <el-select v-model="apiInfoForm.methodType" style="float: left">
            <el-option label="默认" value="ALL"></el-option>
            <el-option label="GET" value="GET"></el-option>
            <el-option label="POST" value="POST"></el-option>
            <el-option label="PUT" value="PUT"></el-option>
            <el-option label="PATCH" value="PATCH"></el-option>
            <el-option label="DELETE" value="DELETE"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item  label="请求参数:" style="float: left">
          <el-button type="primary" @click="apiInfoForm.requestParamsType =1">Headers</el-button>
          <el-button type="primary" @click="apiInfoForm.requestParamsType =2">Body</el-button>
          <el-button type="primary" @click="addRequestParams" >新增参数</el-button>
        </el-form-item>
        <el-form :inline="true" style="float: left;margin-left: 20px"
                 v-show="apiInfoForm.requestParamsType ==1"
                 v-for="(requestParams, index) in apiInfoForm.requestParamsForm"  :key="index">
          <el-form-item :label="'参数' + (index+1)" >
            <el-input v-model="requestParams.requestParamsKey" placeholder="参数名称" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="requestParams.requestParamsValue" placeholder="参数值" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item label="数据类型" >
            <el-select  v-model="requestParams.requestParamsDataType" style="width: 100px">
              <el-option label="String" value="String"></el-option>
              <el-option label="Int" value="Int"></el-option>
              <el-option label="Double" value="Double"></el-option>
              <el-option label="Float" value="Float"></el-option>
              <el-option label="Long" value="Long"></el-option>
              <el-option label="Boolean" value="Boolean"></el-option>
              <el-option label="Object" value="Object"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="必填" >
            <el-select  v-model="requestParams.requestParamsRequired"  placeholder="是" style="width: 70px">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="说明">
            <el-input v-model="requestParams.requestParamsDesc" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="deleteRequestParams(requestParams)">删除</el-button>
          </el-form-item>
        </el-form>
        <el-form-item  v-show="apiInfoForm.requestParamsType ==2" style="clear: both;width: 600px;float: left">
          <el-input v-model="apiInfoForm.requestParamsBody" placeholder="" type="textarea" :rows="10"></el-input>
        </el-form-item>

        <el-form-item  label="返回参数:" style="clear: both;float: left">
          <el-button type="primary" @click="apiInfoForm.responseParamsType =1" v-show="addType == 1">Headers</el-button>
          <el-button type="primary" @click="apiInfoForm.responseParamsType =2" v-show="addType == 1">Body</el-button>
          <el-button type="primary" @click="addResponseParams" v-show="addType == 1">新增参数</el-button>
          <el-button type="primary" @click="getResponseParams" v-show="addType == 2">接口获取</el-button>
        </el-form-item>
        <el-form :inline="true" style="float: left;margin-left: 20px"
                 v-for="(responseParams, index) in apiInfoForm.responseParamsForm"  :key="index"
                 v-show="apiInfoForm.responseParamsType == 1 && addType == 1">
          <el-form-item :label="'参数' + (index+1)" >
            <el-input v-model="responseParams.responseParamsKey" placeholder="参数名称" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="responseParams.responseParamsValue" placeholder="参数值" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item label="数据类型" >
            <el-select  v-model="responseParams.responseParamsDataType" style="width: 100px">
              <el-option label="String" value="String"></el-option>
              <el-option label="Int" value="Int"></el-option>
              <el-option label="Double" value="Double"></el-option>
              <el-option label="Float" value="Float"></el-option>
              <el-option label="Long" value="Long"></el-option>
              <el-option label="Boolean" value="Boolean"></el-option>
              <el-option label="Object" value="Object"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="必填" >
            <el-select  v-model="responseParams.responseParamsRequired"  placeholder="是" style="width: 70px">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="说明">
            <el-input v-model="responseParams.responseParamsDesc" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="deleteResponseParams(responseParams)">删除</el-button>
          </el-form-item>
        </el-form>
        <el-form-item  v-show="apiInfoForm.responseParamsType ==2 || addType ==2  " style="clear: both;width: 600px;float: left">
          <el-input v-model="apiInfoForm.responseParamsBody" placeholder="" type="textarea" :rows="10"></el-input>
        </el-form-item>
      <el-form-item style="clear: both;padding-top: 50px;text-align: center">
          <el-button type="primary" @click="submit">保存</el-button>
          <el-button @click="reset('apiInfoForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {getObjectByKey} from "../../config/help";

  export default {
      data(){
        return{
          menuId: '',
          userName: '',
          addType: '1',
          apiInfoForm: {
            apiAddress: '',
            apiName: '',
            methodType: '',
            requestParamsForm: [{
              requestParamsKey: '',
              requestParamsValue: '',
              requestParamsDataType: '',
              requestParamsRequired: '',
              requestParamsDesc: '',
            }],
            responseParamsForm: [{
              responseParamsKey: '',
              responseParamsValue: '',
              responseParamsDataType: '',
              responseParamsRequired: '',
              responseParamsDesc: '',
            }],
            requestParamsType: 1,
            requestParamsBody: '',
            responseParamsType: 1,
            responseParamsBody: '',
          },
          ipAddress: '',
        }
      },
      methods:{
        init(){
          let params = this.$route.params;
          this.menuId = params && params.menuId;
          this.userName = getObjectByKey("userInfo").userName
        },
        addRequestParams(){
          this.apiInfoForm.requestParamsForm.push({
            requestParamsKey: '',
            requestParamsValue: '',
            requestParamsDataType: '',
            requestParamsRequired: '',
            requestParamsDesc: '',
          });
        },
        deleteRequestParams(item){
          var index = this.apiInfoForm.requestParamsForm.indexOf(item)
          if (index !== -1) {
            this.apiInfoForm.requestParamsForm.splice(index, 1)
          }
        },
        addResponseParams(){
          this.apiInfoForm.responseParamsForm.push({
            responseParamsKey: '',
            responseParamsValue: '',
            responseParamsDataType: '',
            responseParamsRequired: '',
            responseParamsDesc: '',
          });
        },
        deleteResponseParams(item){
          var index = this.apiInfoForm.responseParamsForm.indexOf(item)
          if (index !== -1) {
            this.apiInfoForm.responseParamsForm.splice(index, 1)
          }
        },
        getResponseParams(){

        },
        submit() {
         let vm = this;
       /*  var params = new URLSearchParams();
         params.append("apiInfoForm",this.apiInfoForm+"");*/
         axios.post('/saveApiInfo',{
           data:{
             "apiInfoForm": this.apiInfoForm,
             "menuId": this.menuId,
             "userName": this.userName
           }
         })
           .then(function (res) {
             if(res && res.success){

             }
           }).catch(function (error) {

         })
        },
        reset(formName) {
          this.$refs[formName].resetFields();
        },
      },
    mounted(){
        this.init()
    }
    }
</script>

<style scoped>
.form-item{
  width: 400px;
}
</style>
