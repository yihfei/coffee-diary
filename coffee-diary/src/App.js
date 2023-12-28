import React from 'react';
import Home from './Home';
import BrewSelection from './BrewSelection';
import CreateFilter from './CreateFilter'
import Edit from './Edit';
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<BrewSelection />} />
          <Route path="/create/filter" element={<CreateFilter />} />
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
    </div>
  );
};

export default App;
