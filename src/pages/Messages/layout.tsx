import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const password = "dengqingfang";

export default function MessagesLayout() {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("password") === password) {
      setIsCorrect(true);
      return;
    }
    window.onload = function () {
      const data = prompt("Enter password");

      if (data === password) {
        localStorage.setItem("password", data);
        setIsCorrect(true);
      }
    };

    return () => {
      window.onload = null;
    };
  }, []);

  if (!isCorrect) {
    return (
      <div>
        <h1>Access denied</h1>
        <p>
          You don't have permission to access this page. Please enter the
          correct password.
        </p>
      </div>
    );
  }

  return <Outlet />;
}
