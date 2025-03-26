// src/App.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./assets/login/index.jsx";
import Register from "./assets/register/index.jsx";
import Header from "./assets/header/header.jsx";
import Home from "./assets/home/index.jsx";
import { AuthProvider } from "./assets/authContext/index.jsx";

function App() {
    const routesArray = [
        { path: "*", element: <Login /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/home", element: <Home /> },
    ];

    let routesElement = useRoutes(routesArray);
    return (
        <AuthProvider>
            <Header />
            <div>{routesElement}</div>
        </AuthProvider>
    );
}

export default App;
