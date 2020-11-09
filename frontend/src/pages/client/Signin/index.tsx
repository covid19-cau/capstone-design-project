import React, { useState } from "react";
import Cookies from "js-cookie";
import { Redirect, useHistory } from "react-router-dom";

import * as clientApis from "apis/client";

import styles from "./styles.module.scss";

import Button from "components/client/atoms/Button";
import NavBar from "components/client/organisms/navBar";

function SignIn() {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const history = useHistory();

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  const onLogin = async () => {
    const data = await clientApis.signIn({ id, password });
    if (!data) {
      alert("login info is not valid");
      return;
    }

    Cookies.set("user-token", data);
    history.push("/");
  };

  if (Cookies.get("user-token")) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Login</p>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="id"
              type="id"
              placeholder="ID"
              value={id}
              onChange={(event) => setId(event.target.value)}
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

            <Button
              size="medium"
              style={{ width: "100%" }}
              theme="default"
              onClick={() => history.push("/signup")}
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
