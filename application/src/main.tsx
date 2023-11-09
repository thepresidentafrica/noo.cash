import React from "react";
import ReactDOM from "react-dom/client";
import  { Noocash } from "./App";
import "./styles.css";
import { DEBUG } from "./utils";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        DEBUG('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        DEBUG('Service Worker registration failed:', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Noocash />
  </React.StrictMode>,
);
