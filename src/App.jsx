import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";

import KnowledgeBase from "./pages/KnowledgeBase";

import { ThemeContext } from "./context";

const Home = () => (
  <>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </>
);

const App = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div
      className="app"
      data-theme={darkMode ? "dark" : "light"}
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
      }}
    >
      <Router basename="/Benney-Portfolio-React">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
