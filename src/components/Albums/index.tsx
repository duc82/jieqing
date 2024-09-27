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
  ];

  const newAlbums = albums.slice(0, 9);

  const otherAlbums = albums.slice(9);

  return (
    <section className={styles.albums}>
      <h3 className={styles.albums_title}>Albums</h3>

      <Fancybox className={styles.album_list}>
        {newAlbums.map((album, index) => (
          <a
            href={album}
            data-fancybox
            key={index}
            className={styles.album_item}
          >
            {index === newAlbums.length - 1 && albums.length > 9 && (
              <div className={styles.album_last}>+{otherAlbums.length}</div>
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
