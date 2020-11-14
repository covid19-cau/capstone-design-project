import React from "react";

import mainImg from "assets/main-img.jpg";
import Block, { Direction } from "components/client/molecules/Block";
import Button from "components/client/atoms/Button";

import styles from "./styles.module.scss";

const MainImageCard = () => {
  return (
    <div className={styles.wrapper}>
      <img src={mainImg} style={{ width: "100%" }} />
      <Block direction={Direction.COLUMN} className={styles.text}>
        <p className={styles.title}>Home training</p>
        <p className={styles.description}>With My Home Gym</p>
        <Button theme="outline" className={styles.button}>
          Go Challenge
        </Button>
      </Block>
    </div>
  );
};

export default MainImageCard;
