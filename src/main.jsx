import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App"
import "./index.css"

// Set document title
document.title = "Agent Registration Form"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <App />
  </React.StrictMode>,
)

