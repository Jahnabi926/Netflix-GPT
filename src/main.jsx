import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
//this strict mode of react gives two api calls inside empty dependency useEffect during the development mode to check for inconsistencies in our code.
//but in production it only makes one api call .
