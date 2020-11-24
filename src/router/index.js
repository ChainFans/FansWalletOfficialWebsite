import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch((err) => err);
};

Vue.use(VueRouter)


const routes = [
    // {
    //     path: '/',
    //     name: 'index',
    //     component: () =>
    //         import ('../views/home/index.vue')
    // },
    {
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/home/Home.vue')
    },
    {
        path: '/Homeh5',
        name: 'Homeh5',

        component: () =>
            import ('../views/home/Homeh5.vue')
    },
    {
        path: '/custom',
        name: 'custom',

        component: () =>
            import ('../views/home/custom.vue')
    },
    {
        path: '/customh5',
        name: 'customh5',

        component: () =>
            import ('../views/home/customh5.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/login.vue')
    },
    {
        path: '/resetLoginPasswd',
        name: 'resetLoginPasswd',
        component: () =>
            import ('../views/login/resetLoginPasswd.vue')
    },
    {
        path: '/registered',
        name: 'registered',
        component: () =>
            import ('../views/login/registered.vue')
    },
]
const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router