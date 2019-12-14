<template>
  <div class="views-index">

    <TopCarousel/>
    <Index4labNav/>

    <div class="page-views">
        <el-row type="flex" justify="center">
        <el-col :span="common_module_elcolspan">

            <div class="top-comcorver">
              <el-col :span="24">
                <p style="text-align: center;font-size: 30px;">关于我们腻扑云</p>
              </el-col>
              <el-row>
                <el-row :gutter="30">
                  <el-col :span="12">1</el-col>
                  <el-col :span="12">2</el-col>
                </el-row>
              </el-row>
            </div>

        </el-col>
        </el-row>
    </div>

    <HelloWorld msg="Index.vue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopCarousel from '@/components/index/TopCarousel'
import Index4labNav from '@/components/Navbar/Index4labNav.vue'

export default {
    data() {
      return {
          common_module_elcolspan: this.GLOBAL.common_module_elcolspan,          
      };
  },
  name: 'home',
  components: {
    HelloWorld,
    TopCarousel,
    Index4labNav,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top-comcorver{margin-top: 30px;}
</style>
