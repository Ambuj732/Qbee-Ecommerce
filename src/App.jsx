import React, { useState } from "react";
import "./App.css";
import ProductPage from "./components/Product/ProductPage";
import HomePage from "./components/Home/HomePage";
import Login from "./components/LoginScreen/Login";
import ForgetPassword from "./components/LoginScreen/ForgetPassword";
import SignUp from "./components/LoginScreen/SignUp";
import CartProduct from "./components/Cart/CartProduct";
function App() {
  return (
    <>
      <div>
        <HomePage />
        {/* <ProductPage /> */}
        {/* <Login /> */}
        {/* <ForgetPassword /> */}
        {/* <SignUp /> */}
        {/* <CartProduct />  */}
      </div>
    </>
  );
}

export default App;
