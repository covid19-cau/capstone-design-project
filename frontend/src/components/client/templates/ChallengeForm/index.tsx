import React, { useEffect, useState } from "react";
import { Checkbox, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";

import { Redirect, useHistory } from "react-router-dom";

import Button from "components/client/atoms/Button";
import * as clientApis from "apis/client";

import styles from "./styles.module.scss";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const defaultCheckedList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const mapIndexWithDate = (dateArr: any) => {
  return dateArr.map(
    (date: any) => plainOptions.findIndex(option => option === date) + 1
  );
};

const openNotification = () => {
  notification.open({
    message: "Challenge Register Success",
    description: "Well done!",
    icon: <SmileOutlined style={{ color: "#ff7e64" }} />
  });
};

function ChallengeForm() {
  const [detailedGoal, setDetailedGoal] = useState("");
  const [goal, setGoal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [checkDate, setCheckDate] = useState("");

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const userToken = Cookies.get("user-token");
    if (!userToken) {
      history.push("/signin");
    }
  }, []);

  const onSubmit = () => {
    const member_id = Cookies.get("user-id");
    const mappedCheckDate = mapIndexWithDate(checkedList);

    async function register() {
      const data = await clientApis.registerChallenge({
        member_id,
        goal,
        startDate,
        endDate,
        detailedGoal,
        checkDate: mappedCheckDate
      });

      if (!data?.success) {
        alert("signup info is not valid");
        return;
      }

      openNotification();

      history.push("/challenge");
    }
    register();
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  console.log(startDate, endDate);

  return (
    <div className={styles.wrapper} data-cy="challenge-list">
      <div className={styles.content}>
        <p className={styles.title}>Challenge Register</p>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="detailedGoal">Detailed goal</label>
          <input
            id="detailedGoal"
            placeholder="ex: loss 8 weight"
            value={detailedGoal}
            onChange={event => setDetailedGoal(event.target.value)}
          />
          <div className={styles.section}>
            <span className={styles.need}>*</span>Goal
            <div className={styles.check}>
              <input
                className={styles.checkboxInput}
                name="goal"
                id="diet"
                type="radio"
                value="Diet"
                onChange={event => setGoal(event.target.value)}
              />
              <label htmlFor="diet">Diet</label>
              <input
                className={styles.checkboxInput}
                name="goal"
                id="muscle"
                type="radio"
                value="Muscle"
                onChange={event => setGoal(event.target.value)}
              />
              <label htmlFor="muscle">Muscle</label>
              <input
                className={styles.checkboxInput}
                name="goal"
                id="body"
                type="radio"
                value="Body"
                onChange={event => setGoal(event.target.value)}
              />
              <label htmlFor="body">Body-shape</label>
            </div>
            <br />
          </div>
          <label htmlFor="startDate">
            <span className={styles.need}>*</span>Start Date
            <br />
            <input
              id="startDate"
              type="date"
              onChange={event => setStartDate(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="endDate">
            <span className={styles.need}>*</span>End Date
            <br />
            <input
              id="endDate"
              type="date"
              onChange={event => setEndDate(event.target.value)}
            />
          </label>
          <br />
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>

          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
          <br />

          <Button
            size="medium"
            style={{ width: "100%" }}
            theme="brand"
            type="submit"
            onClick={onSubmit}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChallengeForm;
