import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const NavBar = () => {
  const { t } = useTranslation("common");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.desktopNavbar}>
        <div className={styles.mobileNavbarContainer}>
          <div
            onClick={() => setShowMobileMenu(true)}
            className={styles.hamburgerIcon}
          >
            <GiHamburgerMenu size={22} color="#bf9270" cursor={"pointer"} />
          </div>
        </div>

        <div className={styles.leftBar}>
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
        <div className={styles.centerBar}>
          <p className={styles.header}>Moon Dreamers</p>
        </div>
        <div className={styles.rightBar}>
          <p> {t("account")} </p>
          <AiOutlineShoppingCart size={22} color="#bf9270" cursor={"pointer"} />
        </div>

        {showMobileMenu && (
          <div className={styles.mobileNavRoot}>
            <div className={styles.mobileNav}>
              <div className={styles.navBoxes}>
                <div
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className={styles.closeIcon}
                >
                  <FaWindowClose color="#DBA39A" size={22} />
                </div>
                <p className={classNames(styles.mobileHeader, styles.header)}>
                  Moon Dreamers
                </p>
                <div className={styles.mobileNavItems}>
                  <Link className={styles.link} to={"/ürünler"}>
                    {t("products")}
                  </Link>
                  <Link className={styles.link} to={"/koleksiyonlar"}>
                    {t("collection")}
                  </Link>
                  <Link className={styles.link} to={"/hakkımızda"}>
                    {t("about.us")}
                  </Link>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
