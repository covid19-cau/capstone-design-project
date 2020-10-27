import React from "react";

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
      </Block>
    </Block>
  );
};

export default TitledContents;
