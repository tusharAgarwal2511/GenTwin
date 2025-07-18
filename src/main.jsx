import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "../src/routes/homepage/HomePage.jsx";
import DashBoardPage from "../src/routes/dashboard/DashboardPage.jsx";
import ChatPage from "../src/routes/chatbox/ChatBoxPage.jsx";
import RootLayout from "../src/layouts/rootlayout/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoardLayout from "./layouts/dashboardlayout/DashBoardLayout.jsx";
import SignInPage from "./routes/signin/SignInPage.jsx";
import { SignUpPage } from "./routes/signup/SignUpPage.jsx";




let router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "sign-in/*",
                element: <SignInPage />,
            },
            {
                path: "sign-up/*",
                element: <SignUpPage />,
            },
            {
                element: <DashBoardLayout />,
                children: [
                    { path: "dashboard", element: <DashBoardPage /> },
                    { path: "dashboard/chats/:id", element: <ChatPage /> },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
