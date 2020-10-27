import React from "react";

import Card from "components/client/molecules/Card";
import Block, { Direction, Sort } from "components/client/molecules/Block";

import arrowIcon from "assets/images/next.png";

import styles from "./style.module.scss";

interface IProps {
  category: string;
  image?: string;
  title: string;
  contents: string;
}

const ContentsCard: React.FC<IProps> = ({
  category,
  image,
  title,
  contents,
}) => {
  return (
    <Card className={styles.default}>
      <Block className={styles.top}>
        <p className={styles.category}>{category}</p>
        <img src={image} alt="이미지" className={styles.image} />
      </Block>
      <Block className={styles.bottom} direction={Direction.COLUMN}>
        <Block direction={Direction.COLUMN} sort={Sort.LEFT_CENTER}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.contents}>{contents}</p>
        </Block>
        <Block className={styles.more} sort={Sort.LEFT_CENTER}>
          <img src={arrowIcon} alt="이미지" className={styles.arrowIcon} />
          <p>more</p>
        </Block>
      </Block>
    </Card>
  );
};

export default ContentsCard;
