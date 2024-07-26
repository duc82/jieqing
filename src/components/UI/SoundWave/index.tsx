import clsx from "clsx";
import styles from "./sound_wave.module.scss";

interface SoundWaveProps {
  width?: number;
  height?: number;
  active: boolean;
}

export default function SoundWave({ width, height, active }: SoundWaveProps) {
  return (
    <div className={styles.wave_container} style={{ height }}>
      <div
        className={clsx(styles.wave, active && styles.running)}
        style={{ width }}
      ></div>
      <div
        className={clsx(styles.wave, active && styles.running)}
        style={{ width }}
      ></div>
      <div
        className={clsx(styles.wave, active && styles.running)}
        style={{ width }}
      ></div>
      <div
        className={clsx(styles.wave, active && styles.running)}
        style={{ width }}
      ></div>
      <div
        className={clsx(styles.wave, active && styles.running)}
        style={{ width }}
      ></div>
    </div>
  );
}
