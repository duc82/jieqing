import styles from "./gallery.module.scss";
import album7 from "@/assets/images/album7.webp";
import album8 from "@/assets/images/album8.webp";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery_images}>
        <img src={album7} alt="Album 7" loading="lazy" />
        <img src={album8} alt="Album 8" loading="lazy" />
      </div>

      <div className={styles.gallery_description}>
        <p className={styles.gallery_chinese}>
          生命是一场奇妙的旅程 <br /> 你是途中最美的遇见
        </p>
        <p className={styles.gallery_english}>
          Life is a wonderful journey <br></br> you are the most beautiful
          encounter along the way.
        </p>
      </div>
    </section>
  );
}
