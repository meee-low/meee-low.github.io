// App.tsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import AboutMe from "./pages/AboutMe";

import "./style/style.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="/about-me" element={<AboutMe />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
