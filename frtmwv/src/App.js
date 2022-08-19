import logo from './logo.svg';
import './App.css';
import React from 'react';
import Page from './Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resdata from './Resdata';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path='/' element={<Page/>} />
          <Route path='/res' element={<Resdata/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
