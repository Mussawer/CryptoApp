import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Exchanges, HomePage, News, Cryptocurrencies, CryptoDetails, Navbar } from './Components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/" element={<Exchanges />}/>
            <Route path="/" element={<Cryptocurrencies />}/>
            <Route path="/" element={<CryptoDetails />}/>
            <Route path="/" element={<News />}/>
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;