// src/Routes.jsx
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ResetPasswordByEmail from "./pages/ResetPasswordByEmailPage";
import ResetPassword from "./pages/ResetPassword";
import InspirationPage from "./pages/InspirationPage/InspirationPage";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/reset-password-by-Email" element={<ResetPasswordByEmail/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/inspiration-page" element={<InspirationPage/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
