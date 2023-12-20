// import { useState } from 'react'

import "./App.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <AnnouncementBar />
      <Header/>
      <AppRoutes />
    </>
  );
}

export default App;
