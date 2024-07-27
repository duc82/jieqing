import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./hero.module.scss";
import hero from "@/assets/images/hero.webp";
import clsx from "clsx";
import wedding from "@/assets/audios/wedding.mp3";
import SoundWave from "../UI/SoundWave";
import track from "@/assets/images/track.webp";
import AudioButton from "../UI/AudioButton";
import useTimeContext from "@/hooks/useTimeContext";
import { getDates, getMonths, getYears } from "@/utils/time";

export default function Hero() {
  const [trackTime, setTrackTime] = useState(0); // in seconds
  const [inputRangeValue, setInputRangeValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const time = useTimeContext();
  const audioRef = useRef<HTMLAudioElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleAudio = async (): Promise<void> => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await handlePlayAudio();
    } else {
      handlePauseAudio();
    }
  };

  const handleChangeAudioTime = (e: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = +e.target.value;
  };

  const handlePauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const handlePlayAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    await audio.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.ontimeupdate = () => {
      setTrackTime(audio.currentTime);

      const input = inputRef.current;
      if (!input) return;
      const min = +input.min;
      const max = +input.max;

      const value = ((audio.currentTime - min) / (max - min)) * 100;
      setInputRangeValue(+value);
    };

    return () => {
      audio.ontimeupdate = null;
    };
  }, []);

  return (
    <section className={styles.hero}>
      <h6 className={styles.hero_title}>
        <span>SAVE THE DATE|</span>
        <span className={styles.hero_title_chinese}>
          有一份婚礼邀请函请您查收
        </span>
      </h6>
      <p className={styles.hero_sub_title}>
        <span>
          葛委朋 & <span className="letter-normal">ĐẶNG THANH PHƯƠNG</span>{" "}
          (邓青芳)
        </span>
        <span>
          {getYears(time)}.{getMonths(time).toString().padStart(2, "0")}.
          {getDates(time).toString().padStart(2, "0")}
        </span>
      </p>

      <div className={styles.hero_description}>
        <p>嗨，</p>
        <span>你准备好参加一场欢快的聚会了吗？</span>
      </div>

      <div className={styles.hero_image_group}>
        <div className={clsx(styles.hero_image, isPlaying && styles.running)}>
          <img src={hero} alt="Hero" />
        </div>
        {/* <p className={styles.hero_text_top}>就是爱你</p> */}
        <p className={styles.hero_text_bottom}>Love Story</p>
      </div>

      <p className={styles.hero_text}>
        / <br /> 以前觉得婚礼是一则官方公告 <br />{" "}
        现在才明白这是一场为数不多的相聚 <br /> 是千里迢迢的奔赴
        是不计得失的支持 <br /> 诚邀您携家人参加我们的婚礼
      </p>

      <div className={styles.hero_track}>
        <div className={styles.hero_track_left}>
          <b>给你给我 - 毛不易</b>
          <label htmlFor="trackRange" style={{ display: "none" }}>
            Track Range
          </label>
          <input
            type="range"
            id="trackRange"
            ref={inputRef}
            value={trackTime}
            min={0}
            step={1}
            max={audioRef.current?.duration ?? 0}
            onChange={handleChangeAudioTime}
            onMouseDown={handlePauseAudio}
            onMouseUp={handlePlayAudio}
            style={{
              background: `linear-gradient(to right, rgb(135, 135, 135) 0%, rgb(135, 135, 135) ${inputRangeValue}%, rgb(205, 205, 205) ${inputRangeValue}%, rgb(205, 205, 205) 100%`,
            }}
          />

          <p>{isPlaying ? "音乐在运行" : "音乐关闭了"} ...</p>
        </div>

        <div className={styles.hero_track_right}>
          <audio ref={audioRef} loop>
            <source src={wedding} type="audio/mp3" />
          </audio>

          <img
            src={track}
            alt="Track Thumbnail"
            className={styles.hero_track_image}
          />

          <SoundWave active={isPlaying} />
          <AudioButton
            onToggleAudio={handleToggleAudio}
            isPlaying={isPlaying}
          />
        </div>
      </div>
    </section>
  );
}
