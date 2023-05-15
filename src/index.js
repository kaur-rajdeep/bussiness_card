import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Info from './info.js';
import About from './about.js';
import Interest from './interest';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div class="body">
    <div class="card">
        <Info />
        <About />
        <Interest />
        <Footer />
    </div>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

