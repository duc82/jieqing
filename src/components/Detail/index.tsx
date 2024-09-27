import useTimeContext from "@/hooks/useTimeContext";
import BaiduMap from "../UI/BaiduMap";
import styles from "./detail.module.scss";
import {
  getDates,
  getHours,
  getMinutes,
  getMonths,
  getYears,
} from "@/utils/time";

export default function Detail() {
  const time = useTimeContext();

  return (
    <section className={styles.detail}>
      <div className={styles.detail_content}>
        <h1>
          <span>•</span>
          婚礼时间/Time
          <span>•</span>
        </h1>
        <p>
          {getYears(time)}年{getMonths(time).toString().padStart(2, "0")}月
          {getDates(time).toString().padStart(2, "0")}日{" "}
          {getHours(time).toString().padStart(2, "0")}时
          {getMinutes(time).toString().padStart(2, "0")}分 <br />{" "}
          农历：十月十四（星期四）
        </p>
      </div>
      <div className={styles.detail_content}>
        <h1>
          <span>•</span>
          婚礼地址/Address
          <span>•</span>
        </h1>
        <p>
          盛世唐宫酒店·紫云轩中餐厅
          <br /> 陕西省咸阳市乾县靖庄路盛世唐宫酒店内1-3楼
        </p>
      </div>
      <BaiduMap />
      <div className={styles.detail_content}>
        <p>
          岁月的静好 <br /> 既是陪伴 ,也是依靠 <br /> 我们从相识到婚礼 <br />
          既是成熟 ,也是另一个路口 <br /> 告別你我的青涩 ,迎接我们的风卷云舒
        </p>
      </div>
    </section>
  );
}
