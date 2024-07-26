import {
  APILoader,
  Map,
  Marker,
  NavigationControl,
} from "@uiw/react-baidu-map";
import styles from "./baidu_map.module.scss";

export default function BaiduMap() {
  const position = { lng: 108.279287, lat: 34.540637 };

  return (
    <div className={styles.baidu_map}>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <Map center={position} zoom={18} enableScrollWheelZoom>
          <NavigationControl />
          <Marker position={position} type="loc_red" />
        </Map>
      </APILoader>
    </div>
  );
}
