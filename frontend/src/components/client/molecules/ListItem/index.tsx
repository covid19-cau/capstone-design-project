import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
}

const ListItem: React.FC<IProps> = ({ children, className }) => {
  const classProps = classNames(styles.default, className);

  return <li className={classProps}>{children}</li>;
};

export default ListItem;
