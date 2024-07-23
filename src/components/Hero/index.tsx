import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./_hero.module.scss";
import hero from "@/assets/images/hero.jpg";
import clsx from "clsx";
import wedding from "@/assets/audios/wedding.mp3";
import SoundWave from "../UI/SoundWave";
import track from "@/assets/images/track.jpg";

export default function Hero() {
  const [trackTime, setTrackTime] = useState(0); // in seconds
  const [isPlayingTrack, setIsPlayingTrack] = useState(true);
  const [inputRangeValue, setInputRangeValue] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleAudioTimeUpdate = async (e: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = +e.target.value;
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
        <span>邓青芳 & 葛委朋</span>
        <span>2024.07.20</span>
      </p>

      <div className={styles.hero_description}>
        <p>嗨，</p>
        <span>你准备好参加一场欢快的聚会了吗？</span>
      </div>

      <div className={styles.hero_image_group}>
        <div
          className={clsx(styles.hero_image, isPlayingTrack && styles.running)}
        >
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
          <b>给你给我</b>
          <input
            type="range"
            id="trackRange"
            ref={inputRef}
            value={trackTime}
            min={0}
            step={1}
            max={audioRef.current?.duration || 0}
            onChange={handleAudioTimeUpdate}
            onMouseDown={() => audioRef.current?.pause()}
            onMouseUp={() => audioRef.current?.play()}
            style={{
              background: `linear-gradient(to right, rgb(135, 135, 135) 0%, rgb(135, 135, 135) ${inputRangeValue}%, rgb(205, 205, 205) ${inputRangeValue}%, rgb(205, 205, 205) 100%`,
            }}
          />

          <p>已为您自动播放音乐~</p>
        </div>

        <div className={styles.hero_track_right}>
          <audio ref={audioRef} loop autoPlay>
            <source src={wedding} type="audio/mp3" />
          </audio>

          <img
            src={track}
            alt="Track Thumbnail"
            className={styles.hero_track_image}
          />

          <SoundWave active={isPlayingTrack} />
        </div>
      </div>
    </section>
  );
}
