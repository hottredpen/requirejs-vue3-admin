<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index">
                        <template #title>
                            <el-icon color="#fff" size="22">
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <el-icon color="#fff" size="22">
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script  lang="babel">
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const HomeFilled = window.ElementPlusIconsVue.HomeFilled
const Grid = window.ElementPlusIconsVue.Grid
const Discount = window.ElementPlusIconsVue.Discount
const Document = window.ElementPlusIconsVue.Document
const Sugar = window.ElementPlusIconsVue.Sugar
const PieChart = window.ElementPlusIconsVue.PieChart
const ElementPlus = window.ElementPlusIconsVue.ElementPlus
const Failed = window.ElementPlusIconsVue.Failed
const Fries = window.ElementPlusIconsVue.Fries

export default {
    components: {
        HomeFilled,
        Grid,
        Discount,
        Document,
        Sugar,
        PieChart,
        ElementPlus
    },
    setup() {
        const items = [
            {
                icon: HomeFilled,
                index: "/dashboard",
                title: "系统首页",
            },
            {
                icon: Grid,
                index: "/demo/table",
                title: "基础表格",
            },
            {
                icon: Discount,
                index: "/demo/tabs",
                title: "tab选项卡",
            },
            {
                icon: Document,
                index: "3",
                title: "表单相关",
                subs: [
                    {
                        index: "/demo/form",
                        title: "基本表单",
                    },
                    {
                        index: "4",
                        title: "三级菜单",
                        subs: [
                            {
                                index: "/demo/upload",
                                title: "文件上传",
                            },
                        ],
                    },
                ],
            },
            {
                icon: Failed,
                index: "7",
                title: "错误处理",
                subs: [
                    {
                        index: "/demo/permission",
                        title: "权限测试",
                    },
                    {
                        index: "/404",
                        title: "404页面",
                    },
                ],
            },
        ];

        const route = useRoute();

        const onRoutes = computed(() => {
            return route.path;
        });

        const store = useStore();
        const collapse = computed(() => store.state.collapse);

        return {
            items,
            onRoutes,
            collapse,
        };
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
