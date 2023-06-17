import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import classNames from "classnames";
const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log(showMobileMenu);
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
            Ürünler
          </Link>
          <Link className={styles.link} to={"/koleksiyonlar"}>
            Koleksiyon
          </Link>
          <Link className={styles.link} to={"/hakkımızda"}>
            Hakkımızda
          </Link>
        </div>
        <div className={styles.centerBar}>
          <p className={styles.header}>Moon Dreamers</p>
        </div>
        <div className={styles.rightBar}>
          <p> Hesap </p>
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
                    Ürünler
                  </Link>
                  <Link className={styles.link} to={"/koleksiyonlar"}>
                    Koleksiyon
                  </Link>
                  <Link className={styles.link} to={"/hakkımızda"}>
                    Hakkımızda
                  </Link>
                  <Link className={styles.link}>EN | TR</Link>
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
