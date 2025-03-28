import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/global.scss";

const rootElement = document.getElementById("root");

// ✅ Use hydration for pre-rendered HTML by react-snap
if (rootElement.hasChildNodes()) {
  // Hydrate pre-rendered content
  hydrateRoot(rootElement, 
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Render normally for client-side rendering
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
