import React from "react";
import { Progress, notification } from "antd";
import {
  SmileOutlined,
  ExclamationCircleOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  UserOutlined
} from "@ant-design/icons";

import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";
import Block, { Direction, Sort } from "../../molecules/Block";
import { iconWrapper } from "../../organisms/TitledContents";

import styles from "./styles.module.scss";

const dateMapper = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function ChallengeList({
  checkDate,
  checkDay,
  detailedGoal,
  startDate,
  endDate,
  goal,
  percent
}: any) {
  const openNotification = () => {
    notification.open({
      message: "Challenge date checked",
      description: "Well done",
      icon: <SmileOutlined style={{ color: "#ff7e64" }} />
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Block direction={Direction.COLUMN}>
          <UserOutlined />
          <h2>User's Challenge Info</h2>
          <Block sort={Sort.CENTER_TOP}>
            <div className={styles.content}>
              <img
                src={iconWrapper[goal as keyof typeof iconWrapper]}
                className={styles.purposeIcon}
              />
              <span>
                <Badge className={styles.title}>{goal}</Badge>
              </span>
              <div>
                <ExclamationCircleOutlined />
                <h3 className={styles.leftTitle}>Detailed Goal</h3>
                <p className={styles.border}>{detailedGoal}</p>
              </div>
              <div>
                <CalendarOutlined />
                <h3 className={styles.leftTitle}>Check Date</h3>
                <br />
                {checkDate.map((date: any) => {
                  return <Badge>{dateMapper[date - 1]}</Badge>;
                })}
              </div>
              <Button theme="brand" onClick={openNotification}>
                Check challenge
              </Button>
            </div>
            <div className={styles.side}>
              <div className={styles.sideCard}>
                <div className={styles.date}>
                  <div>
                    <h3 className={styles.title}>Start Date</h3>
                    <p>{startDate}</p>
                  </div>
                  <div>
                    <h3 className={styles.title}>End Date</h3>
                    <p>{endDate}</p>
                  </div>
                </div>
                <div className={styles.status}>
                  <CarryOutOutlined />
                  <h3 className={styles.leftTitle}>D - Days</h3>
                  <p>
                    {true && (
                      <>
                        <b className={styles.due}>D - 1</b>
                      </>
                    )}
                  </p>
                </div>
                <div className={styles.percent}>
                  <h5>Progress</h5>
                  <Progress type="circle" percent={75} strokeColor="#ff7e64" />
                </div>
              </div>
            </div>
          </Block>
        </Block>
      </div>
    </>
  );
}

export default ChallengeList;
