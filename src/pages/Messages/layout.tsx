import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function MessagesLayout() {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const password = "dengqingfang";
    if (localStorage.getItem("jieqing_password") === password) {
      setIsCorrect(true);
      return;
    }
    window.onload = function () {
      const data = prompt("Enter password");

      if (data === password) {
        localStorage.setItem("jieqing_password", data);
        setIsCorrect(true);
      }
    };

    return () => {
      window.onload = null;
    };
  }, []);

  if (!isCorrect) {
    return (
      <div
        className="container"
        style={{ display: "flex", height: "100vh", alignItems: "center" }}
      >
        <div>
          <h1>Access denied</h1>
          <p>
            You don't have permission to access this page. Please enter the
            correct password.
          </p>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
