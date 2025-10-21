import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import { ProductProvider } from "./Context/ProductContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
