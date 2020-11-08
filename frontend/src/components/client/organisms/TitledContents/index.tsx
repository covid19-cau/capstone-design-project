import React from "react";
import Swiper from "react-id-swiper";
import classNames from "classnames";

import arrowIcon from "assets/right-arrow.png";

import Block, { Sort, Direction } from "components/client/molecules/Block";
import Button from "components/client/atoms/Button";
import Card from "components/client/molecules/Card";
import Badge from "components/client/atoms/Badge";

import styles from "./style.module.scss";

interface IProps {
  title: string;
  contents: any[];
  icon: string;
}

const TitledContents: React.FC<IProps> = ({ title, contents, icon }) => {
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // renderPrevButton: () => (
    //   <img
    //     src={arrowIcon}
    //     className={classNames("swiper-button-prev", styles.prev)}
    //   />
    // ),
    // renderNextButton: () => (
    //   <img
    //     src={arrowIcon}
    //     className={classNames("swiper-button-next", styles.next)}
    //   />
    // ),
  };

  return (
    <Block
      direction={Direction.COLUMN}
      sort={Sort.LEFT_TOP}
      className={styles.content}
    >
      <Block sort={Sort.SPACE_BETWEEN}>
        <Badge className={styles.title}>{title}</Badge>
        <Button theme="brand" className={styles.moreButton}>
          more info
        </Button>
      </Block>
      <Block className={styles.section} sort={Sort.LEFT_CENTER}>
        <Swiper {...params}>
          {contents.map((content) => {
            return (
              <a href={content.link} target="_blank">
                <Card className={styles.homeCard}>
                  <p className={styles.homeCardTitle}>{content.title}</p>
                  {content.content}
                </Card>
              </a>
            );
          })}
        </Swiper>
      </Block>
    </Block>
  );
};

export default TitledContents;
