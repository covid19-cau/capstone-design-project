import React from "react";
import { Route } from "react-router-dom";

import routes from "./routes";

function createRoute({ path, component, title }: any) {
  return <Route path={path} component={component} exact={true} key={title} />;
}

const router = () => routes.map((route) => createRoute(route));

export default router;
