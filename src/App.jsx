import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Cart from "./page/Cart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>


      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;