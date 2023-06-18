import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.heroSection}>
      <div className={styles.profil}>
        <div>
          <p className={styles.text}>
            ~Özgünlüğünüzü kabul edin.. {t("what.ever")}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
