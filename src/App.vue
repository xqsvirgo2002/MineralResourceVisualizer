<template>
  <el-container style="height: 200vh;">
    <!-- Header 部分 -->
    <el-header style="background-color: #409EFF; color: white; padding: 0 20px; line-height: 60px;">
      全球矿产资源数据可视化
    </el-header>

    <!-- 侧边导航栏和主视图区域 -->
    <el-container>
      <el-aside width="250px" style="background-color: #334455; color: white;">
        <!-- 侧边导航菜单 -->
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#334455"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" @click="navigate('HomePage')">主页</el-menu-item>
          <el-submenu index="2">
        <template slot="title">
          <span>矿产图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="navigate('MineralProductionChart')">矿产总产量时间比较</el-menu-item>
          <el-menu-item index="2-2" @click="navigate('StackedAreaChart')">矿产总产量区域比较</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" @click="navigate('GlobalMineralChart')">各矿物生产比较</el-menu-item>
      <el-menu-item index="4" @click="navigate('GlobalMineralProduction')">各国按矿物的分类生产</el-menu-item>
      <el-menu-item index="5" @click="navigate('GlobalMineralHeatMap')">各国生产量比较</el-menu-item>
      <el-menu-item index="6" @click="navigate('WorldMap')">世界各国矿产资源查询</el-menu-item>
      </el-menu>
      </el-aside>

      <el-main>
        <!-- 子路由的内容将在这里渲染 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'AppLayout',
  methods: {
    navigate(routeName) {
      if (this.$route.name !== routeName) {
      this.$router.push({ name: routeName });
    }
    },
  },
};
</script>

<style>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

.el-header {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}

.el-menu-item {
  height: 80px; /* 设置您希望的高度 */
  line-height: 80px; /* 确保文本居中 */
}

/* 如果您也使用了子菜单，可能需要调整子菜单项的样式 */
.el-menu-item-group > .el-menu-item,
.el-submenu .el-menu-item {
  height: 80px;
  line-height: 80px;
  font-family: 'Roboto', sans-serif;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px; /* 更新宽度 */
  height: 100%; /* 侧边栏高度填满整个视图高度 */
  font-family: 'Roboto', sans-serif;
}

/* 标题栏样式 */
.el-header {
  font-size: 20px;
  text-align: center;
  height: 100%;
}
</style>
