import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
/*

const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
*/

const routes = [
    {
        path: '/',
        component: login
    }, {
        path: '/manage',
        component: manage,
        name: '',
        children: [{
            path: '',
            component: home,
            meta: [],
        }, {
            path: '/addShop',
            component: addShop,
            meta: ['添加数据', '添加商铺']
        }, {
            path: '/addGoods',
            component: addGoods,
            meta: ['添加数据', '添加商品']
        }, {
            path: '/userList',
            component: userList,
            meta: ['数据管理', '用户列表'],
        }, {
            path: '/adminList',
            component: adminList,
            meta: ['数据管理', '管理员列表'],
        }, {
            path: '/orderList',
            component: orderList,
            meta: ['数据管理', '订单列表'],
        }, {
            path: '/foodList',
            component: foodList,
            meta: ['数据管理', '食品列表'],
        }, {
            path: '/shopList',
            component: shopList,
            meta: ['数据管理', '商家列表']
        }, {
            path: '/visitor',
            component: visitor,
            meta: ['图表', '用户分布']
        }, {
            path: '/adminSet',
            component: adminSet,
            meta: ['设置', '管理员设置']
        }, {
            path: '/explain',
            component: explain,
            meta: ['说明', '用户说明']
        }, {
            path: '/vueEdit',
            component: vueEdit,
            meta: ['编辑', '文本编辑']
        }]
    }
]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
