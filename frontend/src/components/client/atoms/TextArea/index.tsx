import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  id?: string;
}

const Textarea: React.FC<IProps> = ({ className, id, ...props }) => {
  const classProps = classNames(styles.default, className);
  return <textarea className={classProps} {...props} />;
};

export default Textarea;
