import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import SecondPage from "./SecondPage";
import WishList from "./WishList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Product-List" element={<SecondPage />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
