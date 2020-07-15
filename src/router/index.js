import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = () =>
    import ("../views/home/home")
const cart = () =>
    import ("../views/cart/cart")
const category = () =>
    import ("../views/category/category")
const profile = () =>
    import ("../views/profile/profile")


const routes = [{
        path: "/home",
        component: home
    },
    {
        path: "/cart",
        component: cart
    },
    {
        path: "/category",
        component: category
    },
    {
        path: "/profile",
        component: profile
    }
]
export default new VueRouter({
    routes,
    mode: "history"
})