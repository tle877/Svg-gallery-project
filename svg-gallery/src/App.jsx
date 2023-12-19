// import { useState } from 'react'

import "./App.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";

function App() {

  return (
    <>
      <AnnouncementBar />
      <AppRoutes />
    </>
  );
}

export default App;
