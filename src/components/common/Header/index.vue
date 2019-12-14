<template>
  <div>

    <el-row style="z-index:9999999">
      <el-col :span="24">

        <div class="apps-header">

          <div class="apps-header-asidebutt" @click="drawer = true" type="primary">
              <i class="el-icon-s-grid"></i>
          </div>

          <div class="apps-header-logo">
            <el-link href="#" target="_blank" :underline="false"><img src="@/assets/logo.png" width="130px"></el-link>
          </div>

          <div class="apps-header-right-link"><el-link href="https://element.eleme.io" style="color:#fff;font-size: 12px;">442981412@qq.com</el-link></div>

          <div class="apps-header-right-link"><el-link href="https://element.eleme.io" icon="el-icon-s-help" style="color:#fff;font-size: 12px;">控制台</el-link></div>

        </div>

      </el-col>
    </el-row>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      size = "250px"
      main-background = "#252526"
      :with-header="false" class="drawer">
        <div class="main-aside" style="background-color: rgb(37, 37, 38);height: 100%;width: 100%;">
          <app-aside/>
        </div>
    </el-drawer>

  </div>
</template>

<script>
//:modal = "false"
import AppAside from '@/components/common/Aside'

export default {
  components:{
    AppAside,
  },
  name: 'Header',
  props: {
    // msg: String
  },
  data() {
      return {
        drawer: false,
        direction: 'ltr',
      };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .apps-header{height: 50px;background-color: #333333; z-index: 99999;overflow: hidden;}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
  .drawer{
    height: calc(100% - 50px);top: 50px;
  }

  .apps-header-asidebutt {
    width: 50px;height: 50px;float: left;background-color: #252526;font-size: 24px;color: #fff;line-height: 50px;text-align: center
  }
  .apps-header-logo{
    float: left;height: 50px;padding-right: 15px;
    img{
      margin-top: 10px;margin-left: 15px;
    }
  }

  .apps-header-right-link{
    float: right;line-height: 50px;padding-right: 15px;
  }
</style>