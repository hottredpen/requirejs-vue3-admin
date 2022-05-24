import Layout from "component!../view/Layout";
import Login from 'component!../view/login/login'  
import DynamicPage from 'component!../view/DynamicPage'

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, 
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: DynamicPage
            }, 
            {
                path: "/demo/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: DynamicPage
            }, 
            {
                path: "/demo/form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: DynamicPage
            }, 
            {
                path: "/demo/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: DynamicPage
            },
            {
                path: "/demo/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => DynamicPage
            },
            {
                path: "/demo/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => DynamicPage
            }, 
            {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => DynamicPage
            }, 
            {
                path: '/403',
                name: '403',
                meta: {
                    title: '找不到页面'
                },
                component: () => DynamicPage
            },
        ]
    },
     {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: Login
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