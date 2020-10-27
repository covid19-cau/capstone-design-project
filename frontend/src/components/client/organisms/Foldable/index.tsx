import React, { useState } from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

import Card from "components/client/molecules/Card";
import Block, { Sort } from "components/client/molecules/Block";

import downArrow from "assets/images/downArrow.png";
import whiteDownArrow from "assets/images/whiteDownArrow.png";

interface IProps {
  children: React.ReactNode;
  foldedChildren: React.ReactNode;
}

const Foldable: React.FC<IProps> = ({ children, foldedChildren }) => {
  const [folded, setFolded] = useState(false);
  const cardClassProps = classNames(
    styles.cardHeader,
    folded && styles.foldedCard
  );

  return (
    <Card className={styles.card}>
      <Block
        sort={Sort.SPACE_BETWEEN}
        className={cardClassProps}
        onClick={() => setFolded((folded) => !folded)}
      >
        {children}
        <img
          src={folded ? whiteDownArrow : downArrow}
          alt="down"
          className={styles.downIcon}
        />
      </Block>
      {folded && (
        <Block className={styles.answer} sort={Sort.LEFT_CENTER}>
          {foldedChildren}
        </Block>
      )}
    </Card>
  );
};

export default Foldable;
