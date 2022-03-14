
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {GetFilms} from './App.js'
import {Header} from './App.js'


function App() {
  return (
    <div>
      <Header></Header>
      <GetFilms></GetFilms>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
