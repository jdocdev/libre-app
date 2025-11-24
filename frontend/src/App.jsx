import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Toaster } from "react-hot-toast";

import Products from "./pages/products/Products.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import ProductDetail from "./pages/productdetail/ProductDetail.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

function App() {
    // Cargar usuario desde localStorage al iniciar
    const [authUser, setAuthUser] = useState(
        () => JSON.parse(localStorage.getItem("user")) || null
    );

    // Precargar imagen del avatar para cachearlo
    useEffect(() => {
        if (authUser?.imagenUsuario) {
            const img = new Image();
            img.src = authUser.imagenUsuario;
        }
    }, [authUser]);

    // console.log("Usuario autenticado:", authUser);

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />

                <Route
                    path="/products"
                    element={
                        <Products
                            authUser={authUser}
                            setAuthUser={setAuthUser}
                        />
                    }
                />

                <Route
                    path="/login"
                    element={
                        authUser ? (
                            <Navigate to="/products" />
                        ) : (
                            <Login setAuthUser={setAuthUser} />
                        )
                    }
                />

                <Route
                    path="/signup"
                    element={
                        authUser ? (
                            <Navigate to="/products" />
                        ) : (
                            <SignUp setAuthUser={setAuthUser} />
                        )
                    }
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetail authUser={authUser} setAuthUser={setAuthUser}/>}
                />

                <Route
                    path="*"
                    element={
                        <NotFound
                            authUser={authUser}
                            setAuthUser={setAuthUser}
                        />
                    }
                />
            </Routes>

            <Toaster />
        </>
    );
}

export default App;
