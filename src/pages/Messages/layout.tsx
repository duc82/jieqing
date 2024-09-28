import { FormEvent, useState } from "react";
import { Outlet } from "react-router-dom";

export default function MessagesLayout() {
  const passwordLocal = localStorage.getItem("jieqing_password");
  const [isCorrect, setIsCorrect] = useState(Boolean(passwordLocal));
  const password = "dengqingfang";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.currentTarget.password.value;
    if (value === password) {
      localStorage.setItem("jieqing_password", value);
      setIsCorrect(true);
      return;
    }

    alert("Password is incorrect");
  };

  if (!isCorrect) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="messages-form">
          <label htmlFor="password">
            Please enter the password to access the messages
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return <Outlet />;
}
