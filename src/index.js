import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './nav.css';
import './footer.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GamesApps from "./pages/gamesApps";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="GamesApps" element={<GamesApps />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);