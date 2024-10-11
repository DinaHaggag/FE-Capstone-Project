import React, { useState } from 'react';

const ItineraryPlanner = ({ itinerary, addToItinerary }) => {
  const [destination, setDestination] = useState('');

  const handleAdd = () => {
    addToItinerary(destination);
    setDestination('');
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">My Itinerary</h2>
      <ul>
        {itinerary.map((dest, index) => (
          <li key={index}>{dest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-2 rounded"
        placeholder="Add a destination"
      />
      <button onClick={handleAdd} className="ml-2 p-2 bg-green-500 text-white rounded">
        Add
      </button>
    </div>
  );
};

export default ItineraryPlanner;