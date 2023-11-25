import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddPhotopage from "../views/AddPhotopage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/addphoto",
    name: "Add Photo",
    component: AddPhotopage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
