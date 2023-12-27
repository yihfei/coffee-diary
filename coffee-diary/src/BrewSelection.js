import React from 'react';
import { Link } from 'react-router-dom';
import { GiCoffeePot } from "react-icons/gi";


const BrewSelection = () => {
  return (
    <div>
      <h2>Choose Brewing Method</h2>
        <Link to="/create/filter">
            <GiCoffeePot className="animated-icon" />
            Filter
        </Link>
    {/* Add more brewing methods as needed */}
      
    </div>
  );
};

export default BrewSelection;
