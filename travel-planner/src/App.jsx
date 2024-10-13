import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import DestinationCard from './components/DestinationCard.jsx';
import ItineraryPlanner from './components/ItineraryPlanner.jsx';
import { fetchDestinations } from './api/amadeus';

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [itinerary, setItinerary] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await fetchDestinations(query);
      setDestinations(results);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const addToItinerary = (destination) => {
    setItinerary([...itinerary, destination]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center my-4">Travel Planner</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center">
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} onSelect={addToItinerary} />
        ))}
      </div>
      <ItineraryPlanner itinerary={itinerary} addToItinerary={addToItinerary} />
    </div>
  );
};

export default App;