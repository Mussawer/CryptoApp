import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space} from "antd";
import {Navbar} from './Components'
import 'antd/dist/antd.css'
import './App.css';


const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/exchanges" component={Exchanges} />
            <Route exact path="/cryptocurrencies" component={Cryptocurrencies} />
            <Route exact path="/crypto/:coinId" component={CryptoDetails} />
            <Route exact path="/news" component={News} />
          </Switch>
        </Layout>
      </div>
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
  );
};

export default App;

