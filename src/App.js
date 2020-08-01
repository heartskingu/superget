import React from 'react';
import './App.scss';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Body from './components/Body'
import AOS from 'aos';

function App() {
  AOS.init();
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Body/>
    </div>
  );
}

export default App;
