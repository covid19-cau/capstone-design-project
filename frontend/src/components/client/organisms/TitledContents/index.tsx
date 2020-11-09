import React from "react";
import Swiper from "react-id-swiper";
import youtubeThumbnail from "youtube-thumbnail";

import Block, { Sort, Direction } from "components/client/molecules/Block";
import Button from "components/client/atoms/Button";
import Card from "components/client/molecules/Card";
import Badge from "components/client/atoms/Badge";

import styles from "./style.module.scss";

interface IProps {
  title: string;
  contents: any[];
  icon: string;
  type?: string;
}

const TitledContents: React.FC<IProps> = ({ title, contents, type }) => {
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
  console.log(youtubeThumbnail("https://www.youtube.com/watch?v=3VouSaW_LPw"));
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
                  {type === "video" && (
                    <img
                      className={styles.thumbnail}
                      src={youtubeThumbnail(content.link).medium.url}
                    />
                  )}
                  <div className={styles.cardWrapper}>
                    <p className={styles.homeCardTitle}>{content.title}</p>
                    {content.content}
                  </div>
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
