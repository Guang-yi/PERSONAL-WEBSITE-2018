import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css'

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
              >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Bio</Menu.Item>
              <Menu.Item key="3">Gallery</Menu.Item>
              <Menu.Item key="4">Instagram</Menu.Item>
              <Menu.Item key="5">Announcements</Menu.Item>
              <Menu.Item key="6">Connect</Menu.Item>
              <Menu.Item key="7">Contact</Menu.Item>
            </Menu>
        </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
              Mike Lee Design Inc. ©2018 Created w/React, Ant.Design, Heroku
          </Footer>
      </Layout>
    );
  }
}

export default App;
