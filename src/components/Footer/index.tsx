import Countdown from "../UI/Countdown";
import Fancybox from "../UI/Fancybox";
import styles from "./footer.module.scss";
import footer from "@/assets/images/footer.webp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Countdown variant="black" />
      <Fancybox>
        <a href={footer} data-fancybox>
          <img src={footer} alt="Footer" loading="lazy" />
        </a>
      </Fancybox>

      <p className={styles.footer_desc}>
        愿我们最好的时光 <br /> 有你的祝福，愿余生与对方共度 <br />{" "}
        不辜负此生幸福
      </p>
    </footer>
  );
}
