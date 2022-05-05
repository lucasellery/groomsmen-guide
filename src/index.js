import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tips from './pages/Tips';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route path="/tips" element={<Tips />} exact/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
