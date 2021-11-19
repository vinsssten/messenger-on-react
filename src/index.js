import React from "react";
import ReactDom from "react-dom";
import './index.css'

window.React = React;

import App from './App'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);