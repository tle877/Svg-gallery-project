// src/Routes.jsx
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ResetPasswordByEmail from "./pages/ResetPasswordByEmailPage";
import ResetPassword from "./pages/ResetPassword";
import InspirationPage from "./pages/InspirationPage/InspirationPage";
import InspirationUploadPage from './pages/InspirationUploadPage/InspirationUploadPage';
import ProfilePage from "./components/ProfilePage/ProfilePage";

import ImageUploadPage from "./pages/ImageUploadPage/ImageUploadPage";
import UserPage from "./pages/UserPage/UserPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
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
        <Route path="/inspiration-upload-page" element={<InspirationUploadPage/>} />
        <Route path="/profile-page" element={<ProfilePage/>} />
        <Route path="/image-upload-page" element={<ImageUploadPage/>} />
        <Route path="/profile" element={<UserPage/>} />
        <Route path="/notification" element={<NotificationPage/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
