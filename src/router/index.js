import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 定义路由
const routes = [
    //配置映射路径
    {
        path: '/',
        component: () => import('@/view/index'),
        children:[
            {
                path: '/ArticleInfo',
                component: () => import('@/view/ArticleInfo')
            },
        ]
    },
    {
        path: '/login',
        component: () => import('@/view/login')
    },
    {
        path: '/userInfo',
        component: () => import('@/view/userInfo'),
        meta: {
            requiresAuth: true
        }
    },
    //正则匹配未配置的路由路径,路由到404页面
    {
        path: '/:catchAll(.*)',
        name: '/404',
        component: () => import('@/view/404/404.vue')
    }
]
//创建路由实例
const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(localStorage.getItem('token'))
    if (to.path !== '/login' && to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("token")) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})
//导出实例
export default router