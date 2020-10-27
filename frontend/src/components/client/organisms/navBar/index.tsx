import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import List from "components/client/molecules/List";
import Block, { Sort } from "components/client/molecules/Block";
import ListItem from "components/client/molecules/ListItem";

import routes from "configs/routes";

import styles from "./styles.module.scss";

interface IProps {
  className: string;
}

const NavBar: React.FC<IProps> = ({ className }) => {
  const classProps = classNames(styles.default, className);
  return (
    <nav className={classProps}>
      <List>
        <Block sort={Sort.LEFT_CENTER}>
          <p className={styles.logo}>🏠</p>

          {routes.map((route) => {
            if (route.title === "REPORT") return;
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
      </List>
    </nav>
  );
};

export default NavBar;
