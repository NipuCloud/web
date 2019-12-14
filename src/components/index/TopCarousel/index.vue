<template>
<div class="Module-TopCarousel">

  <!--导航栏-->
  <div class="TopCarousel-Navber"><CarouselNavBar/></div>

  <!--轮播图-->
  <el-carousel trigger="click" :height="height">
    <el-carousel-item v-for="(item,index) in bannerArr" :key="index">

      <el-row>
        <el-col :span="24">

          <el-row type="flex" justify="center">
            <el-col :span="17" style="position: relative">
              <div class="TopCarousel-title">{{ item.sTitle }}</div>
              <div class="TopCarousel-title info">{{ item.sInfo }}</div>
              <div class="TopCarousel button">
                <div  v-for="(items,indexs) in item.sButton" :key="indexs">
                    <el-link :href="items.link" :underline="false" target="_blank"><el-button>{{items.name}}</el-button></el-link>
                </div>
                <!-- <el-carousel-item v-for="(items,indexs) in item.sButton" :key="indexs">
                </el-carousel-item> -->
              </div>
            </el-col>
          </el-row>
          <el-image style="height:550px" :src="item.sImg" fit="cover"></el-image>

        </el-col>

      </el-row>

    </el-carousel-item>
  </el-carousel>
  
</div>
</template>

<script>
import CarouselNavBar from '@/components/Navbar/CarouselNavBar.vue'

export default {
  components:{
    CarouselNavBar
  },
  name: 'TopCarousel',
  props: {
    // msg: String
  },
  data(){
    return {
      bannerArr:[
        {
          sImg:require('@/assets/img/poster/1.jpg'),
          sTitle:'iLab-X实验空间API转发服务',
          sInfo:'对ilab-X实验空间接口重新封装, 提高易用性, 稳定性, 更完善的文档',
          sButton:[
            {
              name:'立即使用1',
              link:'https://element.eleme.io'
            }
          ]
        },
        {
          sImg:require('@/assets/img/poster/1.jpg'),
          sTitle:'iLab-X实验空间API转发服务2',
          sInfo:'对ilab-X实验空间接口重新封装, 提高易用性, 稳定性, 更完善的文档2',
          sButton:[
            {
              name:'立即使用2',
              link:'https://element.eleme.io'
            }
          ]
        },
      ],
      height: '550px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Module-TopCarousel{position: relative}
  .TopCarousel-Navber{position: absolute;top: 0;left: 0;right: 0;z-index: 200;}
  .TopCarousel-title{position: absolute;top: 160px;left: 0px;z-index: 10000;font-size: 30px;color: #fff}
  .TopCarousel-title.info{font-size: 14px;top: 220px;}
  .TopCarousel.button{top: 400px;left: 0px;height: 40px;position: absolute;z-index: 10000;}
  .el-button{background-color: inherit;color: #fff;height: 40px;font-size: 14px;padding-left: 30px;padding-right: 30px;border-radius: 0px;}
</style>
