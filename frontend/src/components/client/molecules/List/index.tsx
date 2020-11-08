import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
}

const List: React.FC<IProps> = ({ children, className }) => {
  const classProps = classNames(styles.default, className);
  return <ul className={classProps}>{children}</ul>;
};

export default List;
