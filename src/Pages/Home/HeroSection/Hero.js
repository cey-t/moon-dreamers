import styles from "./Hero.module.scss";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const heroText = document.querySelector(`.${styles.heroText}`);
    const text = heroText.textContent;
    heroText.textContent = "";

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.animationDelay = `${0.1 * i}s`;
      heroText.appendChild(span);
    }
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.profil}>
        <section className={styles.hero}>
          <p className={styles.heroText}>Hello Beautiful</p>
        </section>
      </div>
    </section>
  );
};

export default Hero;
