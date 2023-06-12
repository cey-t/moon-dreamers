import styles from "./Navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
const NavBar = () => {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.leftBarRoot}> */}
      <div className={styles.leftBar}>
        <p>Ürünler</p>
        <p> Koleksiyon</p>
        <p>Hakkımızda</p>
      </div>
      <div className={styles.centerBar}>
        <p className={styles.header}>Moon Dreamers</p>
      </div>
      {/* </div> */}
      <div className={styles.rightBar}>
        <p> Hesap </p>
        <AiOutlineShoppingCart size={22} color="#bf9270" cursor={"pointer"} />
      </div>
    </div>
  );
};
export default NavBar;
