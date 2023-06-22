import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Login = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", loginForm.name, loginForm.surname);
    setLoginForm({ name: "", surname: "" });
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              name="name"
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
              name="surname"
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
