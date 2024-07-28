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
          <p>
            Groom{" "}
            <span className={styles.about_item_icon}>&#x1f1e8;&#x1f1f3;</span>
          </p>
          <p>{"< 葛委朋 >"}</p>
        </div>
        <Heart />
        <div className={styles.about_item}>
          <img src={bride} alt="Bride" loading="lazy" />
          <p>
            Bride{" "}
            <span className={styles.about_item_icon}>&#x1f1fb;&#x1f1f3;</span>
          </p>
          <p className="letter-normal">{"< ĐẶNG THANH PHƯƠNG >"}</p>
        </div>
      </div>
    </section>
  );
}
