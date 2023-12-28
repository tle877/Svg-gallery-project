// import { useState } from 'react'

import "./App.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import ProductionStep from "./components/ProductionStep/ProductionStep";

function App() {

  return (
    <>
      <AnnouncementBar />
      <Header/>
      <AppRoutes />
      <ProductionStep />
      <Footer />
    </>
  );
}

export default App;
