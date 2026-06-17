import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/merriweather/400.css";
import "./index.css";
import App from "./App.jsx";

import "swiper/css";
import "swiper/css/navigation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
