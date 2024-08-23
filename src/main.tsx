import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./assets/styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messages from "./pages/Messages/index.tsx";
import MessagesLayout from "./pages/Messages/layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/messages",
    element: <MessagesLayout />,
    children: [
      {
        index: true,
        element: <Messages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
