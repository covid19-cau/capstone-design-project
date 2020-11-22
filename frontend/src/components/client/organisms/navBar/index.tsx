import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import classNames from "classnames";
import Cookies from "js-cookie";

import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

import * as clientApis from "apis/client";

import List from "components/client/molecules/List";
import Block, { Sort } from "components/client/molecules/Block";
import ListItem from "components/client/molecules/ListItem";

import logo from "assets/logo.png";

import routes from "configs/routes";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
}

const openNotification = () => {
  notification.open({
    message: "SignOut Success",
    description: "See you later!",
    icon: <SmileOutlined style={{ color: "#ff7e64" }} />
  });
};

const NavBar: React.FC<IProps> = ({ className }) => {
  const classProps = classNames(styles.default, className);
  const userToken = Cookies.get("user-token");
  const history = useHistory();

  const onLogout = () => {
    Cookies.remove("user-token");
    Cookies.remove("user-id");
    history.push("/");
    openNotification();
  };

  return (
    <nav className={classProps}>
      <List className={styles.wrapper}>
        <Block sort={Sort.SPACE_BETWEEN}>
          <p className={styles.logo}>🏋🏻</p>
          <Block className={styles.menus} sort={Sort.LEFT_CENTER}>
            {routes.map(route => {
              if (
                route.title === "admin" ||
                route.title === "Signin" ||
                route.title === "Signup"
              )
                return;
              return (
                <ListItem key={route.title}>
                  <NavLink
                    to={route.path}
                    className={styles.menu}
                    activeClassName={styles.active}
                    exact
                  >
                    {route.title}
                  </NavLink>
                </ListItem>
              );
            })}
          </Block>
          <ListItem className={styles.login}>
            {" "}
            <NavLink to={"/signin"} exact>
              <div onClick={userToken ? onLogout : () => null}>
                {userToken ? "Logout" : "Login"}
              </div>
            </NavLink>
          </ListItem>
        </Block>
      </List>
    </nav>
  );
};

export default NavBar;
