import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Media from "./components/Media";
import Branches from "./components/Branches";
import Sweets from "./components/Sweets";
import HotDrinks from "./components/HotDrinks";
import ColdDrinks from "./components/ColdDrinks";
import Foods from "./components/Foods";
import AboutIk from "./components/AboutIk";
import Footer from "./components/Footer";
import './i18n';
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/media" element={<Media />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/sweet" element={<Sweets />} />
        <Route path="/hot" element={<HotDrinks />} />
        <Route path="/cold" element={<ColdDrinks />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/about" element={<AboutIk />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
