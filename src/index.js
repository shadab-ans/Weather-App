import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./index.css";
import App from "./App";

const Copyright = styled.span`
  display: flex;
  position: fixed;
  bottom: 0;
  margin-left: 7%;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  & a {
    text-decoration: none;
    color: black;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Copyright>
      <a href="https://github.com/shadab-ans/Weather-App" target="_blank" rel="noreferrer">© Shadab's Weather App, 2022</a>
    </Copyright>
  </React.StrictMode>
);
