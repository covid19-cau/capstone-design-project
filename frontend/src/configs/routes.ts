import AdminHome from "pages/admin/home";
import Home from "pages/client/home";

const routes = [
  {
    path: "/admin",
    title: "admin",
    component: AdminHome,
  },
  {
    path: "/",
    title: "home",
    component: Home,
  },
];

export default routes;
