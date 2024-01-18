<template>
  <div class="wrapper">
    <!-- 头部导航部分 -->
    <div class="header">
      <NavHeader />
    </div>
    <!-- 首页图片 -->
    <div class="img-header">
      <div class="img-wrapper">
        <img src="https://picsum.photos/1500/400" alt="">
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="container-wrapper">
      <div class="container">
        <el-row justify="space-between" style="height: 100%;">
          <!-- 左侧部分 -->
          <el-col :span="16" class="recommend">
            <div class="row1-wrapper">
              <el-row style="display: flex;justify-content: space-between;">
                <el-col v-for="(item) in row1Data" :key="item" :span="11">
                  <el-card :body-style="{ padding: '0px',height:'250px' }" >
                    <img src="https://picsum.photos/1200/300"
                      class="image" data-aspectratio="4:1"/>
                    <div style="padding: 14px">
                      <h3 style="font-weight: bold;font-size:14px;color: #707377;">{{ item.type }}</h3>
                      <h4 style="font-size:24px;color: black;">{{ item.title }}</h4>
                      <h4 style="color: #707377;">{{ item.intro }}</h4>
                      
                    </div>
                  </el-card>
                </el-col>
                <el-col style="margin: 20px 0;">
                  <el-card 
                  v-for="(item,index) in row2Data" 
                    :key="item" 
                    :span="24" 
                    :style="{'height':'200px','position':'relative','background-color':index%2?'#F9F9F9':'#fff'}">
                    <el-col style="height: 100%;aspect-ratio:1/1;position: absolute;top: 0;right: 0;" :span="6">
                    <img src="https://picsum.photos/300/300" style="height: 100%;" />
                    </el-col>
                    <el-col :span="18" style="width:100%;">
                      <h3 style="font-weight: bold;font-size:14px;color: #707377;">{{ item.type }}</h3>
                      <h4 style="font-size:24px;color: black;">{{ item.title }}</h4>
                      <h4 style="color: #707377;">{{ item.intro }}</h4>
                    </el-col>
                  </el-card>
                </el-col>

              </el-row>
            </div>


          </el-col>
          <!-- 右侧部分 -->
          <el-col :span="8" class="hot-point" style="padding-left:20px;">
            <el-card class="box-card" :body-style="{ padding: '0px 20px' }">
              <template #header>
                <div class="card-header">
                  <h3 style="font-size: 21px;font-weight: bold;">热点</h3>
                </div>
              </template>
              <div v-for="index in hotpointContent" :key="index" class="text item">
                <li>
                  <a :href="index.url || 'javascript:;'">
                    <h4 style="font-size: 18px;">{{ index.title }}</h4>
                  </a>
                </li>
              </div>
            </el-card>
            <div class="grid-content ep-bg-purple-light" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavHeader from '../components/HomePage/NavHeader.vue';
import { ref } from 'vue';

// 热点数据
const hotpointContent = ref([
  {
    title: '① 汽车行业的大数据与分析',
    url: ''
  },
  {
    title: '② 电子行业的大数据与分析',
    url: ''
  },
  {
    title: '③ 金融行业的大数据与分析',
    url: ''
  },
  {
    title: '④ 电子商务行业的大数据与分析',
    url: ''
  }

])

// row1数据
const row1Data = ref([
  {
    type:'视角',
    url:'',
    title:'德勤中国研究《月度经济概览》',
    intro:'第八十七期'
  },
  {
    type:'文章',
    title:'2024年银行业及资本市场展望',
    url:'',
    intro:'面对多重业务模式的根本性挑战，银行须制定能经受市场考验的战略决策：坚定信念、高效敏捷以实现蓬勃发展。'
  }
])

// row2数据
const row2Data = ref([
  {
    type:'文章',
    title:'2023年第三季度 亚太地区金融服务监管政策更新',
    url:'',
    intro:''
  },
  {
    type:'文章',
    title:'德勤报告揭示亚太地区首席财务官新一轮要务',
    url:'',
    intro:''
  },
  {
    type:'文章',
    title:'中国内地及香港IPO市场2023年回顾与2024年前景展望',
    url:'',
    intro:''
  },
  {
    type:'文章',
    title:'德勤报告揭示亚太地区首席财务官新一轮要务',
    url:'',
    intro:'无'
  }
])
</script>


<style scoped>
.cannot-select {
  -moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
}

.header {
  height: 100px;
}

.wrapper {
  height: 2000px;
  width: 99vw;
}


.img-header {
  width: 100%;
}

.img-wrapper {
  width: 90%;
  height: 420px;
  margin: 0 auto;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
}

.container-wrapper {
  background-color: #F2F2F2;
  width: 100%;
  display: flex;
}

.container {
  width: 90%;
  height: 90%;
  margin: 20px auto 0;
  /* background-color: #fff; */
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.recommend {
  height: 100%;
}

/* 设置卡片样式 */

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  width: 100%;
  height: 25%;
}

.box-card {
  width: 100%;
}

.item li {
  padding: 20px;
}

.item:not(:last-child) li {
  border-bottom: 1px solid #F2F2F2;
}

.item li:hover {
  background-color: #F9F9F9;
}

/* 设置row1样式 */
.row1-wrapper{
  height:100%;
  /* background-color: #fff; */
}

.image {
  width: 100%;
  display: block;
}

</style>

