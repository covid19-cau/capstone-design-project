import React, { ChangeEvent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  id?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({
  className,
  id,
  type = "text",
  onChange,
  ...props
}) => {
  const classProps = classNames(styles.default, className);
  return (
    <input required className={classProps} {...props} onChange={onChange} />
  );
};

export default Input;
