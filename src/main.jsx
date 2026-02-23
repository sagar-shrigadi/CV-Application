import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./index.css";
import App from "./App.jsx";
import UserInput from "./components/UserInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserInput />
  </StrictMode>,
);
