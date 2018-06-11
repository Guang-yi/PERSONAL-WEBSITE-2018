//Library
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
//CSS
import './App.css';
import 'antd/dist/antd.css';
//Resources
import mainLogo from './confucius-logo.png';
//Components
import Home from './Home/Home';
import Bio from './Bio/Bio';
import Gallery from './Gallery/Gallery';
import Instagram from './Instagram/Instagram';
import Announcements from './Announcements/Announcements';
import Connect from './Connect/Connect';
import Contact from './Contact/Contact';

const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <img className="logo" src={mainLogo} alt="Logo"/>
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
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Home/>
            </div>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Bio/>
            </div>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Gallery/>
            </div>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Instagram/>
            </div>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Announcements/>
            </div>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Connect/>
            </div>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Contact/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
              Mike Lee Design Inc. ©2018 Created w/React, Ant.Design, Heroku
          </Footer>
      </Layout>
    );
  }
}

export default App;
