// src/Routes.jsx
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ResetPasswordByEmail from "./pages/ResetPasswordByEmailPage";
import ResetPassword from "./pages/ResetPassword";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
        <Route path="/resetPasswordByEmail" element={<ResetPasswordByEmail/>} />
        <Route path="/resetPassword" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
