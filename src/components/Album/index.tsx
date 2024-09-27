import styles from "./album.module.scss";
import album1 from "@/assets/images/album1_webp.webp";
import album2 from "@/assets/images/album2_webp.webp";
import album3 from "@/assets/images/album3_webp.webp";
import album4 from "@/assets/images/album4_webp.webp";
import album5 from "@/assets/images/album5_webp.webp";
import album6 from "@/assets/images/album6_webp.webp";
import Fancybox from "../UI/Fancybox";
import clsx from "clsx";
import Countdown from "../UI/Countdown";

export default function Album() {
  return (
    <section className={styles.album}>
      <Fancybox className={styles.album_items}>
        <div className={styles.album_item}>
          <a data-fancybox href={album1}>
            <img src={album1} alt="Album 1" loading="lazy" />
          </a>
        </div>
        <div className={styles.album_item}>
          <a data-fancybox href={album2}>
            <img src={album2} alt="Album 2" loading="lazy" />
          </a>
        </div>
      </Fancybox>

      <div className={styles.album_content} style={{ maxWidth: 300 }}>
        <p className={styles.quotation_mark}>“</p>
        <p className={styles.album_content_chinese}>
          在 0.00487 的相遇概率下 <br /> 我们跨越一切 <br />{" "}
          投身这场以终身为期限的冒险{" "}
        </p>
        <p className={clsx(styles.quotation_mark, styles.closed)}>”</p>
        <p className={styles.album_content_chinese}>
          你的名字零零几字 <br /> 只字片语虽不成一句话 <br /> 但已经装满了我心
        </p>
      </div>

      <Fancybox className={styles.album_items}>
        <div className={styles.album_item}>
          <a data-fancybox href={album3}>
            <img src={album3} alt="Album 3" loading="lazy" />
          </a>
          <div className={styles.album_item_content}>
            <p>Two souls, one heart,</p>
            <p>Every love story is beautiful, but ours is my favorite.</p>
            <p className={styles.album_content_chinese}>
              （此时此刻 爱与被爱同时发生了）
            </p>
          </div>
        </div>
        <div className={styles.album_item}>
          <a data-fancybox href={album4}>
            <img src={album4} alt="Album 4" loading="lazy" />
          </a>
        </div>
      </Fancybox>

      <Countdown />

      <div className={styles.album_content}>
        <p className={styles.album_content_chinese}>
          / <br />
          没有什么日子需要赋予特殊意义 <br /> 我时爱你 <br />
          不需要在某个节点才袒露心意
        </p>
      </div>

      <Fancybox className={styles.album_items}>
        <div className={styles.album_item}>
          <a href={album5} data-fancybox>
            <img src={album5} alt="Album 5" loading="lazy" />
          </a>
          <div className={styles.album_item_content}>
            <p className={styles.album_content_chinese}>有你的城市下雨也美丽</p>
          </div>
        </div>
        <div className={styles.album_item}>
          <div className={styles.album_item}>
            <a href={album6} data-fancybox>
              <img src={album6} alt="Album 6" loading="lazy" />
            </a>
            <div className={styles.album_item_content}>
              <p className={styles.album_content_chinese}>
                这一天我将穿上婚纱走向他 <br />
                迎来我们人生的新起点
              </p>
            </div>
          </div>
        </div>
      </Fancybox>
    </section>
  );
}
