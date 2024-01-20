<template>
  <div>
    <el-container>
      <!-- 主内容区 -->
      <el-main>
        <div class="header">
          <h1>世界采矿数据概览</h1>
        </div>
        <el-divider></el-divider>
        <div class="overview">
          <p>这个年度出版物汇总了168个国家65种矿物商品的生产数据，以表格形式呈现。数据涵盖了大陆、国家群体、经济集团、生产国的政治稳定性、最大生产者等细节。它为商品预测和国家及欧洲级别的矿物政策活动提供了必不可少的基础。</p>
        </div>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card @click.native="showWorldMapDialog = true">
              <div class="card-content">
                <i class="el-icon-info" style="font-size: 40px;"></i>
                <p>详细信息</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card @click.native="showMineralTableDialog = true">
              <div class="card-content">
                <i class="el-icon-goods" style="font-size: 40px;"></i>
                <p>矿产种类</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card>
              <!-- 可以添加点击事件处理逻辑，例如：@click.native="handlePolicyClick" -->
              <div class="card-content">
                <i class="el-icon-setting" style="font-size: 40px;"></i>
                <p>政策与规定</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <!-- WorldMap Dialog -->
    <el-dialog
      title="世界地图"
      :visible.sync="showWorldMapDialog"
      width="80%"
      :before-close="handleWorldMapClose"
    >
      <WorldMap />
    </el-dialog>

    <!-- MineralTable Dialog -->
    <el-dialog
      title="矿产资源种类"
      :visible.sync="showMineralTableDialog"
      width="70%"
      :before-close="handleMineralTableClose"
    >
      <MineralTable />
    </el-dialog>
  </div>
</template>

<script>
import MineralTable from '@/components/MineralTable.vue';
import WorldMap from '@/components/WorldMap.vue';

export default {
  name: 'HomePage',
  components: {
    MineralTable,
    WorldMap
  },
  data() {
    return {
      showMineralTableDialog: false,
      showWorldMapDialog: false
    };
  },
  methods: {
    handleWorldMapClose(done) {
      this.showWorldMapDialog = false;
      done();
    },
    handleMineralTableClose(done) {
      this.showMineralTableDialog = false;
      done();
    }
    // 可以添加其他方法，例如处理“政策与规定”点击事件的方法
    // handlePolicyClick() {
    //   // 处理点击事件
    // }
  }
};
</script>


<style scoped>
.header h1 {
  text-align: center;
  margin: 30px 0;
}

.overview {
  text-align: justify;
  padding: 0 30px;
}

.el-row {
  margin: 30px 0;
}

.card-content {
  text-align: center;

  p {
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
  }
}

/* 更多样式 */
</style>
