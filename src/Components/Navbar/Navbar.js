import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
const NavBar = () => {
  return (
    <div className={styles.navbar}>
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
    </div>
  );
};
export default NavBar;
