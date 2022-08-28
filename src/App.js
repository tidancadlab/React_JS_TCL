import React from 'react';
import './App.css';
import Navbar from './Components/JS/nav';
import Home from './Components/JS/Home';
import Footer from './Components/JS/Footer';
import SideBar from './Components/JS/SideBar';

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <SideBar/>
    <Home/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
