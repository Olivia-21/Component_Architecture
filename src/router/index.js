import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddPhotopage from "../views/AddPhotopage.vue";
import InsertImagePage from "../views/InsertPhotoPage.vue";
import InterestPage from "../views/InterestPage.vue";

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
  {
    path: "/addphotos",
    name: "Insert Image",
    component: InsertImagePage,
  },
  {
    path: "/interestpage",
    name: "Interest Page",
    component: InterestPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
