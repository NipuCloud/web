<template>
  <div class="Index4labNav">
      <el-row>
        <el-col :span="24">

          <el-row type="flex" justify="center">
            <el-col :span="common_module_elcolspan" style="position: relative">

                <el-row :gutter="30">

                <div  v-for="(items,indexs) in navdata" :key="indexs">
                    <el-col :span="6">
                        <el-link :href="items.link" target="_blank">
                        <el-card shadow="hover" class="tab-clrd-box">
                            <el-row>
                                <el-col :span="6" class="ico" style="max-width:80px;">
                                    <el-image style="width:100%;" :src="items.ico" fit="fit"></el-image>
                                </el-col>
                                <el-col :span="15" class="infobox">
                                    <el-col :span="24" class="title">{{items.title}}</el-col>
                                    <el-col :span="24" class="info">{{items.title2}}</el-col>
                                </el-col>
                            </el-row>
                        </el-card>
                        </el-link>
                    </el-col>
                </div>

                </el-row>

            </el-col>
          </el-row>

        </el-col>

      </el-row>
  </div>
</template>

<script>
export default {
    data() {
      return {
          common_module_elcolspan: this.GLOBAL.common_module_elcolspan,
          navdata: [
              {
                ico: require('@/assets/img/module/index4labnav/2.png'),
                title: '云服务',
                title2: '提供个人开发者上云支持',
                link: ''
              },
              {
                ico: require('@/assets/img/module/index4labnav/1.png'),
                title: '开发者社区',
                title2: '开发者BBS论坛',
                link: ''
              },
              {
                ico: require('@/assets/img/module/index4labnav/3.png'),
                title: '共享知识',
                title2: '个人教程分享发布',
                link: ''
              },
              {
                ico: require('@/assets/img/module/index4labnav/4.png'),
                title: '关于腻扑云',
                title2: '这是个人网站你信吗?==',
                link: ''
              },
          ]
          
      };
  },
  name: 'Index4labNav',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Index4labNav{margin-top: 20px;}
.tab-clrd-box{
    height: 90px;
    .ico{padding-left: 10px;padding-right: 10px;}
    .infobox{margin-left: 15px;}
    .title{font-size: 16px;}
    .info{font-size: 14px;margin-top: 4px;}
}
</style>