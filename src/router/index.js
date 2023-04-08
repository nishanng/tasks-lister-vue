import Vue from "vue";
import Router from "vue-router";
import TaskList from "@/components/TaskList.vue";
import CompletedList from "@/components/CompletedList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "TaskList",
      component: TaskList
    },
    {
      path: "/completed",
      name: "CompletedList",
      component: CompletedList
    }
  ]
});
