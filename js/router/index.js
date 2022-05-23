import Home from "component!../view/Home";
import login from 'component!../view/login/login'  
import Dashboard from 'component!../view/Dashboard'
import BaseTable from 'component!../view/demo/BaseTable'
import BaseForm from 'component!../view/demo/BaseForm'
import Tabs from 'component!../view/demo/Tabs'
import Upload from 'component!../view/demo/Upload'
// import Editor from 'component!../view/demo/Editor'
// import Icon from 'component!../view/demo/Icon'
// import I18n from 'component!../view/demo/I18n'
import Permission from 'component!../view/demo/Permission'
import Page404 from 'component!../view/Page404'
import Page403 from 'component!../view/Page403'


const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, 
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: Dashboard
            }, 
            {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: BaseTable
            }, 
            {
                path: "/form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: BaseForm
            }, 
            {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: Tabs
            },
            {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => Permission
            }, 
            // {
            //     path: "/i18n",
            //     name: "i18n",
            //     meta: {
            //         title: '国际化语言'
            //     },
            //     component: () => I18n
            // }, 
            {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => Upload
            },
            // {
            //     path: "/icon",
            //     name: "icon",
            //     meta: {
            //         title: '自定义图标'
            //     },
            //     component: () => Icon
            // },
            {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => Page404
            }, 
            {
                path: '/403',
                name: '403',
                meta: {
                    title: '找不到页面'
                },
                component: () => Page403
            }, 
            // {
            //     path: '/editor',
            //     name: 'editor',
            //     meta: {
            //         title: '富文本编辑器'
            //     },
            //     component: Editor
            // }
        ]
    },
     {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: login
    }
];

const router = window.VueRouter.createRouter({
    history: window.VueRouter.createWebHashHistory(),
    routes
});
console.log('window',window)

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;