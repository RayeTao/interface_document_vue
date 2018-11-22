<template>
  <div>
    <el-row class="tac">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="selected">
          <el-menu-item :index="item.displayOrder+''" v-for="(item,index) in menuList" :key="index">
              <i class="el-icon-document"></i>
              <span>{{item.menuName}}</span>
          </el-menu-item>
        </el-menu>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
      data(){
        return{
        menuList: {}
        }
      },
      methods: {
        init(){
          this.getMenuList()
        },
        getMenuList(){
          let vm = this;
          axios.get('/getMenuList').then(function (response) {
            if(response.data.success){
              vm.menuList = response.data.data;
              vm.bus.$emit("menuItem",vm.menuList[0])
            }
          }).catch(function (error) {

          })
        },
        selected(index){
          this.bus.$emit("menuItem",this.menuList[index-1])
        },
      },
      mounted(){
        this.init()
        let vm = this;
        this.bus.$on("updateMenuName",function (result) {
          if(result){
            vm.getMenuList()
          }
        })
      }

    }
</script>

<style scoped>

</style>
