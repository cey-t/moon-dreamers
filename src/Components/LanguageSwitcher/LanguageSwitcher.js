import styles from "./LanguageSwitcher.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../../i18n";
const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(i18n.locale);
  const handleChangeLanguage = (lang) => {
    i18n.reloadResources(lang);
    i18n.changeLanguage(lang);
    const { pathname, search } = location;
    navigate({ to: { pathname, search, hash: "" }, state: {} });
    setLanguage(lang);
  };
  return (
    <div className={styles.languageSwitcherSection}>
      <button
        className={classNames(styles.languageSwitcherButton, {
          [styles.active]: language === "en",
        })}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </button>
      <button
        className={classNames(styles.languageSwitcherButton, {
          [styles.active]: language === "tr",
        })}
        onClick={() => handleChangeLanguage("tr")}
      >
        TR
      </button>
    </div>
  );
};
export default LanguageSwitcher;
