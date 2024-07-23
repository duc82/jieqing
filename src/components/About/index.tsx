import styles from "./_about.module.scss";
import groom from "@/assets/images/groom.jpg";
import bride from "@/assets/images/bride.jpg";
import Heart from "../UI/Heart";

export default function About() {
  return (
    <section className={styles.about}>
      <h3 className={styles.about_title}>Wedding Invitation</h3>
      <p className={styles.about_sub_title}>邓青芳 & 葛委朋</p>

      <div className={styles.about_items}>
        <div className={styles.about_item}>
          <img src={groom} alt="Groom" />
        </div>
        <Heart />
        <div className={styles.about_item}>
          <img src={bride} alt="Bride" />
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
