import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { WiMoonWaningCrescent5 } from "react-icons/wi";

const Footer = () => {
  return (
    <section className={styles.footerRoot}>
      <div>
        <p className={styles.header}>Moon Dreamers</p>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerNav}>
          <p className={styles.footerChildHeader}>Navigasyon</p>
          <div className={styles.navItems}>
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
        </div>

        <div>
          <WiMoonWaningCrescent5
            size={40}
            color="#555"
            style={{ marginTop: "10px" }}
          />
        </div>
        <div>
          <p className={styles.footerChildHeader}>Sosyal Medya</p>
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
