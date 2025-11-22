import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

import { Toaster } from "react-hot-toast";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import ProductDetail from "./pages/productDetail/ProductDetail.jsx";

function App() {
    // Cargar usuario desde localStorage al iniciar
    const [authUser, setAuthUser] = useState(
        () => JSON.parse(localStorage.getItem("user")) || null
    );

    console.log("Usuario autenticado:", authUser)

    return (
        <>
            <Routes>
                <Route path="/" element={<Home authUser={authUser} setAuthUser={setAuthUser} />} />

                <Route
                    path="/login"
                    element={
                        authUser ? (
                            <Navigate to="/" />
                        ) : (
                            <Login setAuthUser={setAuthUser} />
                        )
                    }
                />

                <Route
                    path="/signup"
                    element={
                        authUser ? (
                            <Navigate to="/" />
                        ) : (
                            <SignUp setAuthUser={setAuthUser} />
                        )
                    }
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetail authUser={authUser} />}
                />
            </Routes>

            <Toaster />
        </>
    );
}

export default App;
