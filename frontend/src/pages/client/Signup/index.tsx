import React, { useState } from "react";

import Button from "components/client/atoms/Button";
import NavBar from "components/client/organisms/navBar";

import styles from "./styles.module.scss";

function SignUp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [job, setJob] = useState("");

  const handleFormSubmit = () => {};

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Sign Up</p>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="id">
              <span className={styles.need}>*</span>ID
              <br />
              <input
                id="id"
                type="id"
                placeholder="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
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

            <div className={styles.section}>
              <span className={styles.need}>*</span>Goal
              <div className={styles.check}>
                <input
                  className={styles.checkboxInput}
                  name="goal"
                  id="diet"
                  type="radio"
                />
                <label htmlFor="diet">Diet</label>
                <input
                  className={styles.checkboxInput}
                  name="goal"
                  id="muscle"
                  type="radio"
                />
                <label htmlFor="muscle">Muscle</label>
                <input
                  className={styles.checkboxInput}
                  name="goal"
                  id="body-shape"
                  type="radio"
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
