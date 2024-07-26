import styles from "./about.module.scss";
import groom from "@/assets/images/groom.webp";
import bride from "@/assets/images/bride.webp";
import Heart from "../UI/Heart";

export default function About() {
  return (
    <section className={styles.about}>
      <h3 className={styles.about_title}>Wedding Invitation</h3>
      <p className={styles.about_sub_title}>葛委朋 & 邓青芳</p>

      <div className={styles.about_items}>
        <div className={styles.about_item}>
          <img src={groom} alt="Groom" loading="lazy" />
        </div>
        <Heart />
        <div className={styles.about_item}>
          <img src={bride} alt="Bride" loading="lazy" />
        </div>
      </div>

      <div className={styles.about_descriptions}>
        <div className={styles.about_description}>
          <p>Groom</p>
          <p>{"< 葛委朋 >"}</p>
        </div>
        <div className={styles.about_description}>
          <p>Bride</p>
          <p>{"< 邓青芳 >"}</p>
        </div>
      </div>
    </section>
  );
}
