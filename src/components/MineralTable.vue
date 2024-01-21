<template>
    <div class="minerals-tables">
      <el-row>
        <el-col :span="8" v-for="(tableList, index) in splitMineralsList" :key="index">
          <el-table :data="tableList" border style="width: 100%">
            <el-table-column prop="english" label="英文名称" width="180"></el-table-column>
            <el-table-column prop="chinese" label="中文名称" width="180"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </template>
  
<script>
export default {
    name: 'MineralTable',
    data() {
        return {
            mineralsList: [
                { english: 'Chromium', chinese: '铬' },
                { english: 'Fluorspar', chinese: '氟石' },
                { english: 'Gypsum', chinese: '石膏' },
                { english: 'Salt', chinese: '盐' },
                { english: 'Talc', chinese: '滑石' },
                { english: 'Steam Coal', chinese: '动力煤' },
                { english: 'Nat. Gas', chinese: '天然气' },
                { english: 'Total', chinese: '总计' },
                { english: 'Aluminium', chinese: '铝' },
                { english: 'Antimony', chinese: '锑' },
                { english: 'Arsenic', chinese: '砷' },
                { english: 'Asbestos', chinese: '石棉' },
                { english: 'Baryte', chinese: '重晶石' },
                { english: 'Bauxite', chinese: '铝土矿' },
                { english: 'Bentonite', chinese: '膨润土' },
                { english: 'Beryllium', chinese: '铍' },
                { english: 'Bismuth', chinese: '铋' },
                { english: 'Boron', chinese: '硼' },
                { english: 'Cadmium', chinese: '镉' },
                { english: 'Cobalt', chinese: '钴' },
                { english: 'Coking Coal', chinese: '炼焦煤' },
                { english: 'Copper', chinese: '铜' },
                { english: 'Diam. (Gem)', chinese: '钻石（宝石级）' },
                { english: 'Diam. (Ind)', chinese: '钻石（工业级）' },
                { english: 'Diatomite', chinese: '硅藻土' },
                { english: 'Feldspar', chinese: '长石' },
                { english: 'Gallium', chinese: '镓' },
                { english: 'Germanium', chinese: '锗' },
                { english: 'Gold', chinese: '金' },
                { english: 'Graphite', chinese: '石墨' },
                { english: 'Indium', chinese: '铟' },
                { english: 'Iron', chinese: '铁' },
                { english: 'Kaolin', chinese: '高岭土' },
                { english: 'Lead', chinese: '铅' },
                { english: 'Lignite', chinese: '褐煤' },
                { english: 'Lithium', chinese: '锂' },
                { english: 'Magnesite', chinese: '菱镁矿' },
                { english: 'Manganese', chinese: '锰' },
                { english: 'Mercury', chinese: '汞' },
                { english: 'Molybdenum', chinese: '钼' },
                { english: 'Nickel', chinese: '镍' },
                { english: 'Niobium', chinese: '铌' },
                { english: 'Oil Sands*', chinese: '油砂' },
                { english: 'Oil Shales', chinese: '油页岩' },
                { english: 'Palladium', chinese: '钯' },
                { english: 'Perlite', chinese: '珍珠岩' },
                { english: 'Petroleum', chinese: '石油' },
                { english: 'Phosphates', chinese: '磷酸盐' },
                { english: 'Platinum', chinese: '铂' },
                { english: 'Potash', chinese: '钾盐' },
                { english: 'Rare Earths', chinese: '稀土元素' },
                { english: 'Rhenium', chinese: '铼' },
                { english: 'Rhodium', chinese: '铑' },
                { english: 'Selenium', chinese: '硒' },
                { english: 'Silver', chinese: '银' },
                { english: 'Sulfur', chinese: '硫' },
                { english: 'Tantalum', chinese: '钽' },
                { english: 'Tellurium', chinese: '碲' },
                { english: 'Tin', chinese: '锡' },
                { english: 'Titanium', chinese: '钛' },
                { english: 'Tungsten', chinese: '钨' },
                { english: 'Uranium', chinese: '铀' },
                { english: 'Vanadium', chinese: '钒' },
                { english: 'Vermiculite', chinese: '蛭石' },
                { english: 'Zinc', chinese: '锌' },
                { english: 'Zircon', chinese: '锆石' }
            ]
        };
    },
    computed: {
    splitMineralsList() {
      // 将原始列表分成三个部分
      const listLength = this.mineralsList.length;
      const partLength = Math.ceil(listLength / 3);

      return [
        this.mineralsList.slice(0, partLength),
        this.mineralsList.slice(partLength, partLength * 2),
        this.mineralsList.slice(partLength * 2, listLength)
      ];
    }
  }

}
</script>
  
<style>
.minerals-table {
    margin: 20px;
}
</style>
  