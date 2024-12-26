import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import News from "./pages/News";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Players from "./pages/Players";
import Donation from "./pages/Donation";
import Museum from "./pages/Museum";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import GlobalStyles from "./assets/styles/GlobalStyles";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import music1 from "./assets/music/music1.mp3";
import TextBanner from "./components/TextBanner";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      document.getElementById("background-music").pause();
    } else {
      document.getElementById("background-music").play();
    }
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header
          toggleDarkMode={toggleDarkMode}
          toggleMusic={toggleMusic}
          isPlaying={isPlaying}
          isDarkMode={isDarkMode}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/players" element={<Players />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/museum" element={<Museum />} />
        </Routes>
        <TextBanner />
        <Footer />
        <audio id="background-music" loop>
          <source src={music1} type="audio/mpeg" />
        </audio>
      </ThemeProvider>
    </>
  );
}

export default App;
