import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css"
import {BrowserRouter} from "react-router-dom"
import Router from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Router />
  </React.StrictMode>
  </BrowserRouter>
);
