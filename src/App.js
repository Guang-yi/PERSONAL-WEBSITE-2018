//Library
import React, { Component } from 'react';
import {Affix, Layout, Menu } from 'antd';
//CSS
// import './App.css';
// import 'antd/dist/antd.css';
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
import NavigationBar from './Navigation/NavigationBar'

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Home></Home>
      </div>
    );
  }
}

export default App;
