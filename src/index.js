import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./common/Header";
import HomePage from "./homepage/HomePage";
import AboutPage from './aboutpage/AboutPage';

ReactDom.render(

  <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />

    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);