import clsx from "clsx";
import getDays from "../../utils/getDays";
import styles from "./calendar.module.scss";
import Heart from "../UI/Heart";
import useTimeContext from "@/hooks/useTimeContext";
import { getDates, getMonths, getYears } from "@/utils/time";

export default function Calendar() {
  const time = useTimeContext();

  const day = getDates(time);
  const month = getMonths(time);
  const year = getYears(time);

  const days = getDays(month, year);

  // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
  const firstDay = new Date(year, month - 1, 1).getDay();

  return (
    <section className={styles.calendar}>
      <div className={styles.calendar_overlay}></div>
      <div className={styles.calendar_container}>
        <div className={styles.calendar_header}>
          <span className={styles.calendar_month}>
            {month.toString().padStart(2, "0")}
          </span>
          <div className={styles.calendar_center}>
            <span className={styles.calendar_day}>
              /{day.toString().padStart(2, "0")}
            </span>
            <span className={styles.calendar_year}>{year}</span>
          </div>
        </div>

        <div className={styles.calendar_body}>
          <div className={styles.calendar_chinese}>
            <div>一</div>
            <div>二</div>
            <div>三</div>
            <div>四</div>
            <div>五</div>
            <div>六</div>
            <div>日</div>
          </div>

          <div className={styles.calendar_days}>
            {firstDay !== 1 && (
              <div
                className={styles.calendar_day}
                style={{
                  gridColumn: `span ${firstDay === 0 ? 6 : firstDay - 1}`,
                }}
              ></div>
            )}
            {Array.from({ length: days }).map((_, index) => (
              <div
                key={index}
                className={clsx(
                  styles.calendar_day,
                  index + 1 === day && styles.active
                )}
              >
                <span>{(index + 1).toString().padStart(2, "0")}</span>

                {index + 1 === day && (
                  <div className={styles.heart_wrapper}>
                    <Heart width={40} height={40} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
