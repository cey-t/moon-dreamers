import { useState } from "react";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SignUp = () => {
  const { t } = useTranslation("common");
  const [loginForm, setLoginForm] = useState({
    name: "",
    surname: "",
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
              type="text"
              placeholder={t("name")}
              name="name"
              onChange={handleChange}
              className={styles.input}
              value={loginForm.name}
              autoComplete="name"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder={t("surname")}
              name="surname"
              className={styles.input}
              onChange={handleChange}
              value={loginForm.surname}
              autoComplete="name"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={styles.input}
              onChange={handleChange}
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
              {t("signup")}
            </button>{" "}
            <p className={styles.registerText}>
              {t("turn.login")}
              <Link className={styles.link} to={"/login"}>
                {t("login")}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
