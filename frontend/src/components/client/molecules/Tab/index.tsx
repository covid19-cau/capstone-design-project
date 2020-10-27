import React, { memo } from "react";
import classNames from "classnames";

import Block from "components/client/molecules/Block";
import Button from "components/client/atoms/Button";

import styles from "./style.module.scss";

interface IProps {
  tabItems: { title: string; isActive: boolean }[];
  className?: string;
  onTabClick: (title: string) => void;
}

const Tab: React.FC<IProps> = ({ tabItems, className, onTabClick }) => {
  const classProps = classNames(styles.default, className);
  return (
    <Block className={classProps}>
      {tabItems.map((tab) => {
        return (
          <Button
            key={tab.title}
            className={styles.button}
            theme={tab.isActive ? "outline" : "gray"}
            size="medium"
            onClick={() => onTabClick(tab.title)}
          >
            {tab.title}
          </Button>
        );
      })}
    </Block>
  );
};

export default memo(Tab);
