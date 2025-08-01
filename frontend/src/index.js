import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css"
import {BrowserRouter} from "react-router-dom"
import Router from './routes/routes';
import { AuthProvider } from './auth/providers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Router />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

