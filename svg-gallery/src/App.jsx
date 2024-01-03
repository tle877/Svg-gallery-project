// import { useState } from 'react'

import "./App.css";
import "./fonts.css";
import AppRoutes from "./Routes";
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { TagsDropdown } from "./components/TagsDropdown/TagsDropdown";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <AppRoutes />
      <TagsDropdown />
      <Footer />
    </>
  );
}

export default App;
