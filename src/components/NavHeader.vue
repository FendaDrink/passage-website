<template>
    <div class="header-wrapper">
        <div class="menu-wrapper">
            <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        :ellipsis="false"
        @select="handleSelect">
            <!-- 网页的logo -->
            <el-menu-item index="0">
                <img class="logo"
                    src="/src/assets/logo.svg" 
                    alt="Website logo" />
            </el-menu-item>

            <!-- 网页导航菜单 -->
            <div class="flex-grow" />
            <!-- Home -->
            <el-menu-item index="1">HOME</el-menu-item>
            <!-- PASSAGE -->
            <el-sub-menu index="2">
                <template #title>PASSAGE</template>
                <el-menu-item index="2-1">Column One</el-menu-item>
                <el-menu-item index="2-2">Column Two</el-menu-item>
                <el-menu-item index="2-3">Column Three</el-menu-item>
                <el-menu-item index="2-4">Column Four</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>Detail</template>
                <el-menu-item index="3-1">Column One</el-menu-item>
                <el-menu-item index="3-2">Column Two</el-menu-item>
                <el-menu-item index="3-3">Column Three</el-menu-item>
                <el-menu-item index="3-4">Column Four</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="4">Contact</el-menu-item>

            <!-- 搜索框 -->
            <div class="searchInput">
                <el-input
                v-model="searchInfo"
                placeholder="Please input"
                class="input-with-select"
                >
                <template #append>
                    <el-button :icon="Search" />
                </template>
                </el-input>
            </div>

            <!-- 联系我们 -->
            <el-button id="contactBtn">CONTACT</el-button>
        </el-menu>
        </div>  
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const activeIndex = ref('1')
const searchInfo = ref('')

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
  
<style>
.logo{
    height: inherit;
}

.flex-grow {
    flex-grow: 1;
}
.header-wrapper,
el-menu{
    /* height: 100px; */
    position: sticky;
}

.header-wrapper{
    padding: 0;
    width:100%;
    background-color: orange;
    display: flex;
}

.menu-wrapper{
    margin: 0 auto;
    width: 90%;
}

.searchInput,
#contactBtn{
    margin: auto 1%;
}


.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

</style>