import React from "react";
import Swiper from "react-id-swiper";
import youtubeThumbnail from "youtube-thumbnail";

import Block, { Sort, Direction } from "components/client/molecules/Block";
import Button from "components/client/atoms/Button";
import Card from "components/client/molecules/Card";
import Badge from "components/client/atoms/Badge";

import dietIcon from "assets/diet.png";
import bodyshapeIcon from "assets/body-shape.png";
import muscleIcon from "assets/muscle.png";

import styles from "./style.module.scss";

export const iconWrapper = {
  Diet: dietIcon,
  Body: bodyshapeIcon,
  Muscle: muscleIcon
};

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
      prevEl: ".swiper-button-prev"
    }
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
          {contents.map(content => {
            const { link, title, training_purpose, ...others } = content;
            const otherProps = Object.keys(others);
            return (
              <a href={link} target="_blank">
                <Card className={styles.homeCard}>
                  {type === "video" && (
                    <img
                      className={styles.thumbnail}
                      src={youtubeThumbnail(content.link).medium.url}
                    />
                  )}
                  <div className={styles.cardWrapper}>
                    <img
                      src={
                        iconWrapper[
                          training_purpose as keyof typeof iconWrapper
                        ]
                      }
                      className={styles.purposeIcon}
                    />
                    <p className={styles.homeCardTitle}>{title}</p>
                    {otherProps.map((prop, index) => (
                      <Badge
                        className={styles.badge}
                      >{`${prop}: ${others[prop]}`}</Badge>
                    ))}
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
