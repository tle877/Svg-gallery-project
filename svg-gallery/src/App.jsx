// import { useState } from 'react'

import "./App.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <AnnouncementBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
