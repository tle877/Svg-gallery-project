// import { useState } from 'react'

import "./App.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import YouMayAlsoLike from "./components/YouMayAlsoLike/YouMayAlsoLike";


function App() {

  return (
    <>
      <AnnouncementBar />
      <Header/>
      <AppRoutes />
      <Footer />
      
    </>
  );
}

export default App;
