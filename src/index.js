import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/first
import { Rutas } from './routes/Rutas';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  </React.StrictMode>
);
