import React from 'react';
import './App.css';
import Navbar from './Components/JS/nav';
import Home from './Components/JS/Home';
import AboutUs from './Components/JS/About';

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <AboutUs/>
    </div>
    </>
  );
}

export default App;
console.log(Home, AboutUs)
