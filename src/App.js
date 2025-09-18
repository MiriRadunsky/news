import React from 'react';
import './App.css';
import SideBar from './components/SideBar.jsx';

import MainContent from './components/MainContent.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldPage from './components/WorldPage.jsx';
import PoliticsPage from './components/PoliticsPage.jsx';
import BusinessPage from './components/BusinessPage.jsx';
import TechPage from './components/TechPage.jsx';
import SportsPage from './components/SportsPage.jsx';
import CulturePage from './components/CulturePage.jsx';
import sampleArticles from './data.js';
 


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-layout" style={{ display: 'flex' }}>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContent articles={sampleArticles} />} />
          <Route path="/world" element={<WorldPage />} />
          <Route path="/politics" element={<PoliticsPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/culture" element={<CulturePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
