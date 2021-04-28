import Vue from 'vue'
import VueRouter from 'vue-router';
import footer   from '../components/Footer'
import login from '../view/Login'
import Home from '../view/Home'
Vue.use(VueRouter);
// 定义路由
const routes=[
    //配置映射路径
    { path: '/', component: Home },
    { path: '/footer', component: footer },
    { path: '/login', component: login }
]
//创建路由实例
const router = new VueRouter({
    routes
})
//导出实例
export default router 