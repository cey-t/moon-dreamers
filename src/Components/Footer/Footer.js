import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.footerRoot}>
      <div>
        <p className={styles.header}>Moon Dreamers</p>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerNav}>
          <p className={styles.footerChildHeader}>{t("navigation")}</p>
          <div className={styles.navItems}>
            <Link className={styles.link} to={"/ürünler"}>
              {t("products")}
            </Link>
            <Link className={styles.link} to={"/koleksiyonlar"}>
              {t("collection")}
            </Link>
            <Link className={styles.link} to={"/hakkımızda"}>
              {t("about.us")}
            </Link>
          </div>
        </div>

        <div>
          <LanguageSwitcher />
        </div>
        <div>
          <p className={styles.footerChildHeader}>{t("social.media")}</p>
          <div className={styles.socialMedia}>
            <a
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.instagram.com/m.dreamersbutik/  "}
            >
              <BsInstagram />
            </a>
            <Link className={styles.link} to={"/koleksiyonlar"}>
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
