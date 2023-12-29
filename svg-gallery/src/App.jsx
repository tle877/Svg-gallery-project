// import { useState } from 'react'

import "./App.css";
import "./fonts.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import YouMayAlsoLike from "./components/YouMayAlsoLike/YouMayAlsoLike";
import RecommendedModel from "./components/RecommendedModel/RecommendedModel";


function App() {

  return (
    <>
      <AnnouncementBar />
      <Header/>
      <AppRoutes />
      <YouMayAlsoLike />
      <RecommendedModel />
      <Footer />
      
    </>
  );
}

export default App;
