import { useEffect, useState } from "react";
import styles from "./countdown.module.scss";
import {
  formatDays,
  formatHours,
  formatMinutes,
  formatSeconds,
} from "@/utils/time";
import useTimeContext from "@/hooks/useTimeContext";
import clsx from "clsx";

export default function Countdown({
  variant = "red",
}: {
  variant?: "red" | "black";
}) {
  const time = useTimeContext();

  const countdownTime = time - Date.now();

  const [countdown, setCountdown] = useState(countdownTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.countdown}>
      <div
        className={clsx(
          styles.countdown_item,
          variant === "black" && styles.black
        )}
      >
        {formatDays(countdown)} <br />天
      </div>
      <div
        className={clsx(
          styles.countdown_item,
          variant === "black" && styles.black
        )}
      >
        {formatHours(countdown)} <br />时
      </div>
      <div
        className={clsx(
          styles.countdown_item,
          variant === "black" && styles.black
        )}
      >
        {formatMinutes(countdown)} <br />分
      </div>
      <div
        className={clsx(
          styles.countdown_item,
          variant === "black" && styles.black
        )}
      >
        {formatSeconds(countdown)} <br />秒
      </div>
    </section>
  );
}
