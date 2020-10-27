import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IProps> = ({ children, className, onSubmit }) => {
  const classProps = classNames(styles.default, className);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={onFormSubmit} className={classProps}>
      {children}
    </form>
  );
};

export default Form;
