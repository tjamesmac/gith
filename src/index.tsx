import React from 'react';
import ReactDOM from "react-dom";
import { App } from "./app";

const root = document.querySelector("#root");

if (root) {
    ReactDOM.render(<App />, root)
}