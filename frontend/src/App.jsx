import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import ProductDetail from "./pages/productDetail/ProductDetail.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
}

export default App;
