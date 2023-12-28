// import { useState } from 'react'

import "./App.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Description from "./components/Description/Description";


function App() {

  return (
    <>
      <AnnouncementBar />
      <Header/>
      <AppRoutes />
      <Description />
      <Footer />

    </>
  );
}

export default App;
