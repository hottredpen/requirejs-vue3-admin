<template>
    <div>
        <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>

        <el-row :gutter="20" style="padding-top:20px;">
            <el-col :span="6">
                <el-card class="box-card">
                    <template #header>
                    <div class="card-header">
                        <span>访问量</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                    </template>
                    <v-echarts autoresize :option="optionkk"/>
                    <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <template #header>
                    <div class="card-header">
                        <span>授权数</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                    </template>
                    <v-echarts autoresize :option="optionkk"/>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                    <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                    </template>
                    <v-echarts autoresize :option="optionkk" :width="600" :height="400"/>
                </el-card>
            </el-col>
        </el-row>




    </div>
</template>

<script lang="babel">
import vEcharts from "../../components/Echarts.vue";
export default {
    name: "dashboard",
    components: {
        vEcharts
    },
    data () {
        return {
            optionkk: {
                textStyle: {
                fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
                },
                title: {
                text: "Traffic Sources",
                left: "center"
                },
                tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                orient: "vertical",
                left: "left",
                data: [
                    "Direct",
                    "Email",
                    "Ad Networks",
                    "Video Ads",
                    "Search Engines"
                ]
                },
                series: [
                {
                    name: "Traffic Sources",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                    { value: 335, name: "Direct" },
                    { value: 310, name: "Email" },
                    { value: 234, name: "Ad Networks" },
                    { value: 135, name: "Video Ads" },
                    { value: 1548, name: "Search Engines" }
                    ],
                    emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                    }
                }
                ]
            }
        }
    },
    setup() {

        return {
           
        };
    },
};
</script>

<style>

</style>
