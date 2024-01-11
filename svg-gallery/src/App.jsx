// import { useState } from 'react'
import "react-image-crop/dist/ReactCrop.css";
import "./App.css";
import "./fonts.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
