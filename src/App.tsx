// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
