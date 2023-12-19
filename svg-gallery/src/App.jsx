// import { useState } from 'react'

import "./App.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import NavigationBar from "./components/NavigationBar/navigationBar";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <AnnouncementBar />
      <Header/>
      <NavigationBar/>
      <AppRoutes />
    </>
  );
}

export default App;
