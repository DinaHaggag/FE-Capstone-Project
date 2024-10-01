import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import { searchDestinations } from '../utils/api';

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchDestinations(query);
    setDestinations(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
