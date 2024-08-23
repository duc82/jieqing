import { FormEvent } from "react";
import styles from "./message.module.scss";

export default function Message() {
  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const name = e.currentTarget.fullName.value;
      const phone = e.currentTarget.phone.value;
      const attendances = e.currentTarget.attendances.value;
      const createdAt = new Date().toISOString();

      if (!name || !phone || !attendances) {
        return alert("请填写完整信息");
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          attendances,
          createdAt,
        }),
      });

      if (!res.ok) {
        return alert("发送失败");
      }

      alert("发送成功");

      (e.target as HTMLFormElement & EventTarget).reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.message}>
      <form className={styles.message_form} onSubmit={handleSendMessage}>
        <div className={styles.message_group_input}>
          <label htmlFor="fullName" hidden></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="姓名"
            autoComplete="off"
            autoCorrect="off"
          />
        </div>
        <div className={styles.message_group_input}>
          <label htmlFor="phone" hidden></label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="手机"
            autoComplete="off"
          />
        </div>
        <div className={styles.message_group_input}>
          <label htmlFor="attendances" hidden></label>
          <input
            type="text"
            id="attendances"
            name="attendances"
            placeholder="出席人数"
            autoComplete="off"
          />
        </div>
        <button type="submit" className={styles.message_form_button}>
          提交
        </button>
      </form>

      <div className={styles.message_note}>
        <h3 className={styles.message_note_title}>新人碎碎念</h3>
        <ul className={styles.message_note_list}>
          <li>
            如果你身在不同的城市，或因繁忙的工作无法到达仪
            式现场，没有关系，我们已经收到祝福了哦~
          </li>
          <li>
            如果你有时间，请准备好你的好心情和好胃口，开开 心心的来赴约吧~
          </li>
          <li>婚礼有专业摄影摄像，欢迎大家积极与我们合影记录 哦心</li>
          <li>婚礼忙碌，如若我们招待不周，请多多包涵~</li>
        </ul>
      </div>
    </section>
  );
}
