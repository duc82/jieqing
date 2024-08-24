import styles from "./albums.module.scss";
import dsc6544 from "@/assets/images/albums/DSC_6544.jpg";
import dsc6607 from "@/assets/images/albums/DSC_6607.jpg";
import dsc6680 from "@/assets/images/albums/DSC_6680.jpg";
import dsc6710 from "@/assets/images/albums/DSC_6710.jpg";
import dsc6839 from "@/assets/images/albums/DSC_6839.jpg";
import dsc7009 from "@/assets/images/albums/DSC_7009.jpg";
import dsc7123 from "@/assets/images/albums/DSC_7123.jpg";
import dsc7140 from "@/assets/images/albums/DSC_7140.jpg";
import dsc7156 from "@/assets/images/albums/DSC_7156.jpg";
import dsc7163 from "@/assets/images/albums/DSC_7163.jpg";
import Fancybox from "../UI/Fancybox";

export default function Albums() {
  const albums = [
    dsc6544,
    dsc6607,
    dsc6680,
    dsc6710,
    dsc6839,
    dsc7009,
    dsc7123,
    dsc7140,
    dsc7156,
    dsc7163,
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
            {index === newAlbums.length - 1 && (
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
