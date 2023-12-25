import React from 'react';
import Home from './Home';
import Create from './Create'
import Edit from './Edit';
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
    </div>
  );
};

export default App;
