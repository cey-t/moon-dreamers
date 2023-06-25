import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useTranslation } from "react-i18next";
import Authentication from "../../services/Authentication";
let auth = new Authentication();
const Login = () => {
  let navigate = useNavigate();
  const { t } = useTranslation("common");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    auth
      .postLogin({ email: loginForm?.email, password: loginForm?.password })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        notification.error({
          message: t("error"),
          description: t("invalidCredentialsError"),
        });
        console.log(err);
      });
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.inputContainer}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className={styles.input}
              value={loginForm.email}
              autoComplete="name"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder={t("password")}
              name="password"
              className={styles.input}
              onChange={handleChange}
              value={loginForm.password}
              autoComplete="name"
            />
            <button type="submit" className={styles.submit}>
              {t("login")}
            </button>{" "}
            <p className={styles.registerText}>
              {t("still.register")}
              <Link className={styles.link} to={"/signup"}>
                {t("signup")}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
