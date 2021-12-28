import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Join from "./views/Join";
import Test from "./views/Test";
import Todo from "./views/Todo";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/join",
      component: Join,
    },
    {
      path: "/test",
      component: Test
    },
    {
      path:"/todo",
      component: Todo
    }
  ]
});

export default router;