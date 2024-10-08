import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
