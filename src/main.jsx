import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "../src/routes/homepage/HomePage.jsx";
import DashBoardPage from "../src/routes/dashboard/DashboardPage.jsx";
import ChatPage from "../src/routes/chatbox/ChatBoxPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/dashboard",
        children: [
          {path: '/dashboard', element: <DashBoardPage />},
          {path: '/dashboard/chats/:id', element: <ChatPage/>}
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
