import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
}

const Card: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(styles.default, className);
  return <div className={classProps}>{children}</div>;
};

export default Card;
