import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import MainPage from './pages/MainPage';

import './App.css';
import Resume from './pages/Resume';
import Splash from './pages/Splash';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import InfoPage from './InfoPage/InfoPage';
import PortfolioPage from './pages/PortfolioPage';

export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Splash />}></Route>
                {/* <Route path="/codeportfolio" element={<CodePortfolio/>} ></Route>
                <Route path="/designportfolio" element={<DesignPortfolio />} />
                <Route path="/bartendingportfolio" element={<BartendingPortfolio />} />
                <Route path="/resume" element={<Resume />} /> */}
                <Route path="/" element={<Layout />}>
                    <Route path="portfolio/:type" element={<PortfolioPage />} />
                    {/* <Route path="codeportfolio" element={<CodePortfolio />} />
                    <Route path="designportfolio" element={<DesignPortfolio />} />
                    <Route path="bartendingportfolio" element={<BartendingPortfolio />} /> */}
                    <Route path="resume" element={<Resume />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
