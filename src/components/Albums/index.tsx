import styles from "./albums.module.scss";
import album_1 from "@/assets/images/albums/album_1_webp.webp";
import album_2 from "@/assets/images/albums/album_2_webp.webp";
import album_3 from "@/assets/images/albums/album_3_webp.webp";
import album_4 from "@/assets/images/albums/album_4_webp.webp";
import album_5 from "@/assets/images/albums/album_5_webp.webp";
import album_6 from "@/assets/images/albums/album_6_webp.webp";
import album_7 from "@/assets/images/albums/album_7_webp.webp";
import album_8 from "@/assets/images/albums/album_8_webp.webp";
import album_9 from "@/assets/images/albums/album_9_webp.webp";
import album_10 from "@/assets/images/albums/album_10_webp.webp";
import album_11 from "@/assets/images/albums/album_11_webp.webp";
import album_12 from "@/assets/images/albums/album_12_webp.webp";
import album_13 from "@/assets/images/albums/album_13_webp.webp";
import album_14 from "@/assets/images/albums/album_14_webp.webp";
import album_15 from "@/assets/images/albums/album_15_webp.webp";
import album_16 from "@/assets/images/albums/album_16_webp.webp";
import album_17 from "@/assets/images/albums/album_17_webp.webp";
import album_18 from "@/assets/images/albums/album_18_webp.webp";
import Fancybox from "../UI/Fancybox";

export default function Albums() {
  const albums = [
    album_1,
    album_2,
    album_3,
    album_4,
    album_5,
    album_6,
    album_7,
    album_8,
    album_9,
    album_10,
    album_11,
    album_12,
    album_13,
    album_14,
    album_15,
    album_16,
    album_17,
    album_18,
  ];

  const newAlbums = albums.slice(0, 9);

  const otherAlbums = albums.slice(9);

  return (
    <section className={styles.albums}>
      <h3 className={styles.albums_title}>Albums</h3>
      <p className={styles.album_sub_title}>专辑</p>

      <Fancybox className={styles.album_list}>
        {newAlbums.map((album, index) => (
          <a
            href={album}
            data-fancybox
            key={index}
            className={styles.album_item}
          >
            {index === newAlbums.length - 1 && albums.length > 9 && (
              <div className={styles.album_last}>
                <span>+</span>
                <span>{otherAlbums.length}</span>
              </div>
            )}
            <img src={album} alt={`album-${index}`} loading="lazy" />
          </a>
        ))}

        {otherAlbums.map((album, index) => (
          <a
            href={album}
            data-fancybox
            key={index}
            className={styles.album_item}
            style={{ display: "none" }}
          >
            <img src={album} alt={`album-${index}`} loading="lazy" />
          </a>
        ))}
      </Fancybox>
    </section>
  );
}
