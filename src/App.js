// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, Cryptodetails } from './components';
import useSystemTheme from './components/useSystemTheme'

const App = () => {
  const theme = useSystemTheme(); // 'dark' or 'light'

  return (
  
      <div className={`app ${theme}`}> {/* ⬅️ Add theme class to root */}
        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <Layout className="cyber-layout">
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<Cryptodetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>

        <div className="cyber-footer">
          <Typography.Title level={5} className="footer-title">
            BITBLEND <span className="glow-text">//</span> DECENTRALIZED FUTURE
          </Typography.Title>
          <Space className="footer-links">
            <a href="/" className="footer-link">HOME</a>
            <span className="link-separator">|</span>
            <a href="/exchanges" className="footer-link">EXCHANGES</a>
            <span className="link-separator">|</span>
            <a href="/news" className="footer-link">NEWS</a>
          </Space>
        </div>
      </div>

  );
};

export default App;
