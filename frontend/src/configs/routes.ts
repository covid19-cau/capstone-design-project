import AdminHome from "pages/admin/home";
import Home from "pages/client/home";
import Challenge from "pages/client/Challenge";
import SignIn from "pages/client/Signin";
import SignUp from "pages/client/Signup";

const routes = [
  {
    path: "/admin",
    title: "admin",
    component: AdminHome
  },
  {
    path: "/",
    title: "Home",
    component: Home
  },
  {
    path: "/challenge",
    title: "Challenge",
    component: Challenge
  },
  {
    path: "/signin",
    title: "Signin",
    component: SignIn
  },
  {
    path: "/signup",
    title: "Signup",
    component: SignUp
  }
];

export default routes;
