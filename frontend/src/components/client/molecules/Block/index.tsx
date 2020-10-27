import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export enum Direction {
  ROW = "row",
  COLUMN = "column"
}

export enum Sort {
  LEFT_TOP = "left-top",
  LEFT_CENTER = "left-center",
  LEFT_BOTTOM = "left-bottom",
  CENTER_TOP = "center-top",
  CENTER_CENTER = "center-center",
  CENTER_BOTTOM = "center-bottom",
  RIGHT_TOP = "right-top",
  RIGHT_CENTER = "right-center",
  RIGHT_BOTTOM = "right-bottom",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around"
}

interface IProps {
  className?: string;
  children: React.ReactNode;
  direction?: Direction;
  sort?: Sort;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
}

const Block: React.FC<IProps> = ({
  className,
  children,
  direction = Direction.ROW,
  sort = Sort.CENTER_CENTER,
  onClick
}) => {
  const classProps = classNames(
    styles.default,
    className,
    styles[direction],
    direction === Direction.COLUMN ? styles[`c-${sort}`] : styles[sort]
  );

  return (
    <div className={classProps} onClick={onClick}>
      {children}
    </div>
  );
};

export default Block;
