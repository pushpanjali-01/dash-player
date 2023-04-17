
import './App.css';
import React from 'react';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import Tvshows from './Tvshows';
import Movies from './Movies';
import Originals from './Originals';
import Sports from './Sports';
import Premium from './Premium';
import Home from './Home';


const App=()=> {
  return (
  <React.Fragment>
      <Menu />
     
      <Routes>
        {/* <Route  path='/' element={<Home/>} /> */}
        <Route  path='/home' element={<Home/>} />
        <Route  path='/tvshows' element={<Tvshows/>} />
        {/* <Route  path='/Originals' element={<Originals />} /> */}
        {/* <Route  path='/movies' element={<Movies />} /> */}
        {/* <Route  path='/sports' element={<Sports/>} /> */}
        {/* <Route  path='/premium' element={<Premium/>} /> */}
      </Routes>
  </React.Fragment>
  );
}

export default App;
