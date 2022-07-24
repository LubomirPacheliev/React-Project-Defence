import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthGuard from "./Guards/AuthGuard";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Register from "./Components/Authentication/Register/Register";
import Login from "./Components/Authentication/Login/Login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthGuard >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthGuard>
      </BrowserRouter>
    </div>
  );
}

export default App;
