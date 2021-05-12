import Vue from 'vue'
import VueRouter from 'vue-router';
import footer   from '../components/homeFooter'
import login from '../view/login'
import index from '../view/index'
import userInfo from '../view/userInfo'
import notFond from '../view/404/404.vue'
Vue.use(VueRouter);
// 定义路由
const routes=[
    //配置映射路径
    { path: '/', component: index },
    { path: '/footer', component: footer },
    { path: '/login', component: login },
    { path: '/userInfo', component: userInfo,meta: { requiresAuth:true } },
    { path: '/:catchAll(.*)',name:'/404', component: notFond }

]
//创建路由实例
const router = new VueRouter({
    routes
})
// router.beforeEach((to, from, next) => {
//     if (to.name!=='login' && to.matched.some(record=>{record.meta.requiresAuth}) && ) {
//         next({
//             path:'login',
//         })
//     }
// })
//导出实例
export default router
