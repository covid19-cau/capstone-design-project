import React, { useState } from "react";

import * as clientApis from "apis/client";
import { Redirect, useHistory } from "react-router-dom";

import Button from "components/client/atoms/Button";
import NavBar from "components/client/organisms/navBar";

import styles from "./styles.module.scss";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [goal, setGoal] = useState("");

  const history = useHistory();

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  const onSingup = async () => {
    const data = await clientApis.signUp({ name, email, password, goal });
    if (!data?.success) {
      alert("signup info is not valid");
      return;
    }

    alert("signup success");
    history.push("/");
  };

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Sign Up</p>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">
              <span className={styles.need}>*</span>name
              <br />
              <input
                id="name"
                type="text"
                placeholder="Type your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <br />
            <label htmlFor="email">
              <span className={styles.need}>*</span>email
              <br />
              <input
                id="email"
                type="email"
                placeholder="Type your name"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <br />
            <label htmlFor="password">
              <span className={styles.need}>*</span>Password
              <br />
              <input
                id="password"
                type="password"
                placeholder="type password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <label htmlFor="repeated-password">
              <span className={styles.need}>*</span>Repeat password
              <br />
              <input
                id="repeated-password"
                type="password"
                placeholder="password check"
                value={repeatedPassword}
                onChange={(event) => setRepeatedPassword(event.target.value)}
              />
            </label>
            <br />

            <div className={styles.section}>
              <span className={styles.need}>*</span>Goal
              <div className={styles.check}>
                <input
                  className={styles.checkboxInput}
                  name="goal"
                  id="diet"
                  type="radio"
                  onChange={(event) => setGoal(event.target.value)}
                />
                <label htmlFor="diet">Diet</label>
                <input
                  className={styles.checkboxInput}
                  name="goal"
                  id="muscle"
                  type="radio"
                  onChange={(event) => setGoal(event.target.value)}
                />
                <label htmlFor="muscle">Muscle</label>
                <input
                  className={styles.checkboxInput}
                  name="goal"
                  id="body-shape"
                  type="radio"
                  onChange={(event) => setGoal(event.target.value)}
                />
                <label htmlFor="body-shape">Body-shape</label>
              </div>
              <br />
            </div>
            <Button
              size="medium"
              style={{ width: "100%" }}
              theme="brand"
              type="submit"
              onClick={onSingup}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
