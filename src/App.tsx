import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import MainPage from './pages/MainPage';

import './App.css';
import CodePortfolio from './pages/CodePortfolio';
import DesignPortfolio from './pages/DesignPortfolio';
import BartendingPortfolio from './pages/BartendingPortfolio';
import Resume from './pages/Resume';
import Splash from './pages/Splash';

export default function App() {
    return (
        <BrowserRouter basename='PersonalSite'>
            <Routes>
                <Route path="/" element={<Splash />}></Route>
                {/* <Route path="/" element={<Layout />}>
                    <Route path="/codeportfolio" element={<CodePortfolio />} />
                    <Route path="/designportfolio" element={<DesignPortfolio />} />
                    <Route path="/bartendingportfolio" element={<BartendingPortfolio />} />
                    <Route path="/resume" element={<Resume />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
