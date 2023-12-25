import React from 'react';
import { Link } from "react-router-dom";

const BrewList = ({ brews , setBrews }) => { // Destructure the props to get 'brews'

  const handleClick = async (id) => {
    try {
        await fetch('http://localhost:3030/brews/' + id, {
            method: 'DELETE'
        });

        // Update the task list by refetching the data
        const updatedBrews = await fetch('http://localhost:3030/brews').then(response => response.json());
        setBrews(updatedBrews);
    } catch (error) {
        console.error('Error deleting brew:', error);
    }
};

  return (
    <div className="brew-list">
      <h2>Brew List</h2>
      {brews && brews.map((brew) => (
          <div key={brew.id} className="brew-card">
            <h3>{brew.coffeeType}</h3>
            <p><strong>Amount Used:</strong> {brew.amountUsed}</p>
            <p><strong>Grind Setting:</strong> {brew.grindSetting}</p>
            <p><strong>Water Temperature:</strong> {brew.waterTemperature}</p>
            <p><strong>Pours:</strong></p>
            <div>
              {brew.pours.map((pour) => (
                <li key={`${brew.id}-${pour.pourNumber}`}>Pour {pour.pourNumber}: {pour.volume}</li>
              ))}
            </div>
            <p><strong>Total Drain Time:</strong> {brew.totalDrainTime}</p>
            <button onClick={() => handleClick(brew.id)}>delete</button>
            <Link to={`/edit/${brew.id}`}>
                <button>edit</button>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default BrewList;
