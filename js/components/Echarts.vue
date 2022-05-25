<template>
  <div :id="chartId" class="chart-container" :style="'width:'+width+'px;height:'+height+'px;'"></div>
</template>
<script>
import * as echarts from "echarts";
import { onMounted, reactive, watch, ref, nextTick } from "vue";
export default {
  props: {
    time: {
      type: Number,
      default: 0,
    },
    option:{
        type: Object,
        default:null
    },
    width:{
        type:Number,
        default: 450,
    },
    height:{
        type:Number,
        default: 200,
    }
  },
  name: "Echarts",
  setup(props) {
    let myChart;
    const chartId = ref("ref" + new Date().getTime());
    const initCharts = () => {
      myChart = echarts.init(document.getElementById(chartId.value));
      const option = props.option
      myChart.setOption(option);
    };
    onMounted(() => {
      nextTick(() => {
        initCharts();
      });
      window.onresize = () => {
        //  根据窗口大小调整曲线大小
        myChart.resize();
      };
    });
    return {
      chartId,
    };
  },
};
</script>
<style>
</style>

