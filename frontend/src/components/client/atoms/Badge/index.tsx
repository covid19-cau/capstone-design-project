import React from "react";

import classNames from "classnames";

import styles from "./style.module.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const themes = ["", styles.blue, styles.red, styles.green];

const Badge: React.FC<IProps> = ({ children, className }) => {
  const classProps = classNames(styles.default, className);
  return <p className={classProps}>{children}</p>;
};

export default Badge;
