<template>
  <div class="CarouselNavBar">

    <el-menu class="el-menu-CarouselNavBar" mode="horizontal">
      <el-menu-item index="1">产品</el-menu-item>
      <el-menu-item index="2">解决方案</el-menu-item>
      <el-menu-item index="3">文档</el-menu-item>
      <el-menu-item index="4">支持</el-menu-item>
      <el-menu-item index="5">开发者</el-menu-item>
      <el-menu-item index="6">了解腻扑云</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
    data() {
      return {
      };
  },
  name: 'CarouselNavBar',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-menu-CarouselNavBar{background-color: inherit}
  .el-menu{border-bottom: solid 1px #868686;}
  .el-menu-item{color: #fff;height: 60px;line-height:60px;font-size: 12px;}
</style>