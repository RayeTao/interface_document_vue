<template>
  <div>
    <el-container>
      <el-header class="header">接口文档系统</el-header>
      <el-container>
        <el-aside class="aside" width="180px">
        <left-menu></left-menu>
        </el-aside>
        <el-main class="main">
          <right-main></right-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import LeftMenu from "../../components/LeftMenu";
    import RightMain from "../../components/RightMain";

    export default {
      components: {
        'right-main': RightMain,
        'left-menu': LeftMenu
      }

    }
</script>

<style scoped>
.header{
  background-color: #409eff;
  color: white;
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 60px;
}
  .aside{
    height: 1000px;
  }
  .main{
    height: 1000px;
  }
</style>
