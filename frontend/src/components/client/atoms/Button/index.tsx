import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  theme?: "brand" | "default" | "outline" | "gray";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: object;
}

const Button: React.FC<IProps> = ({
  children,
  onClick,
  theme = "default",
  size = "small",
  type = "button",
  className,
  style,
  ...props
}) => {
  const buttonClass = classnames(
    styles.common,
    styles[theme],
    styles[size],
    className
  );

  return (
    <button style={style} className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "default",
  size: "small",
};

export default Button;
