import React, { useState } from "react";

import styles from "./styles.module.scss";

import Button from "components/client/atoms/Button";
import NavBar from "components/client/organisms/navBar";

function SignIn() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  const onLogin = () => {};

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Login</p>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="ID@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              style={{ width: "100%" }}
              size="medium"
              theme="brand"
              onClick={onLogin}
            >
              Login
            </Button>

            <hr className={styles.bar} />
            <p className={styles.noUser}>you are not a member?</p>

            <Button size="medium" style={{ width: "100%" }} theme="default">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
