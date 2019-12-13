// 导包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 登录组件
import login from '../views/login/login.vue'

// 注册
Vue.use(VueRouter);

// 路由配置
const routes = [
    {
        path: '/login',
        component: login
    }
];

// 实例化
const router = new VueRouter({
    routes
})

// 暴露
export default router;