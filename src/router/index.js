import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddPhotopage from "../views/AddPhotopage.vue";
import InsertImagePage from "../views/InsertPhotoPage.vue";
import InterestPage from "../views/InterestPage.vue";
import InterestPage2 from "../views/InterestPage2.vue";
import CongratsPage from "../views/CongratsPage.vue";
import ClientDetails from "../views/ClientDetailsPage.vue";
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
  {
    path: "/interestpage2",
    name: "Interest-Page2",
    component: InterestPage2,
  },
  {
    path: "/congrats",
    name: "congratsPage",
    component: CongratsPage,
  },
  {
    path: "/clientdetails/:name",
    name: "clientdetails",
    component: ClientDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
