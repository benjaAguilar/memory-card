import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.jsx";
import CardsGame from "./cardsGame.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <CardsGame />
  </React.StrictMode>
);
