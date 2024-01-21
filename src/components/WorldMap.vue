<template>
    <div class="map-container">
        <div class="search-container">
            <el-input v-model="searchQuery" placeholder="输入国家名称" class="search-input"
                @keyup.enter="searchCountry"></el-input>
            <el-button type="primary" @click="searchCountry">搜索</el-button>
        </div>
        <div id="map"></div>
        <el-dialog :visible.sync="dialogVisible" :title="selectedCountry + ' 的矿产资源(单位：吨/立方米)'" width="60%"
            :before-close="handleBeforeClose" class="custom-dialog">
            <div v-if="selectedCountryMinerals.length">
                <ul class="mineral-list">
                    <li v-for="mineral in selectedCountryMinerals" :key="mineral.Minerals">
                        {{ mineral.Minerals }}: {{ mineral.Production }}
                    </li>
                </ul>
            </div>
            <div v-else>
                <p>未记录该国家矿产资源的信息。</p>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import mineralsData from '@/assets/minerals_production.json'; // 根据实际路径更新
import { Dialog } from 'element-ui';

export default {
    name: 'WorldMap',
    components: {
        ElDialog: Dialog
    },
    data() {
        return {
            selectedCountry: '',
            selectedCountryMinerals: [],
            dialogVisible: false,
            searchQuery: ''
        };
    },
    mounted() {
        import('@/assets/world.js').then(() => {
            var chart = echarts.init(document.getElementById('map'));
            var option = {
                series: [
                    {
                        type: 'map',
                        map: 'world',
                    }
                ]
            };
            chart.setOption(option);
            chart.on('click', this.handleCountryClick);
        });
    },
    methods: {
        handleBeforeClose(done) {
            this.dialogVisible = false;
            done();
        },
        handleCountryClick(params) {
            this.selectedCountry = params.name;
            this.selectedCountryMinerals = mineralsData[this.selectedCountry] || [];
            this.dialogVisible = true;
        },
        searchCountry() {
            if (!this.searchQuery) return;

            this.selectedCountry = this.searchQuery;
            this.selectedCountryMinerals = mineralsData[this.selectedCountry] || [];
            this.dialogVisible = true;

            // 这里应添加定位国家的逻辑
        }
    }
}
</script>
<style>
.search-container {
    padding: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-input {
    margin-right: 10px;
}

.custom-dialog .el-dialog {
    background-color: #f5f5f5;
    /* 设置对话框背景颜色为浅灰色 */
    border-radius: 8px;
}

.custom-dialog .el-dialog__header {
    color: #333;
    font-size: 18px;
}

.custom-dialog .el-dialog__body {
    font-size: 16px;
    color: #343434c6;
}

.mineral-list {
    list-style-type: none;
    padding: 0;
}

.mineral-list li {
    margin: 10px 0;
    font-weight: bold;
}

.map-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh; /* 这里定义了容器的高度 */
}

#map {
    width: 1500px; /* 增加地图的宽度 */
    height: 1200px; /* 增加地图的高度 */
    margin-top: -20px;
    z-index: 1;
}
</style>