import AdminHome from "pages/admin/home";
import Home from "pages/client/home";
import Challenge from "pages/client/challenge";

const routes = [
  {
    path: "/admin",
    title: "admin",
    component: AdminHome,
  },
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/challenge",
    title: "Challenge",
    component: Challenge,
  },
];

export default routes;
