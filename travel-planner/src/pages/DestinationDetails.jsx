import { useEffect, useState } from 'react';
import { fetchFlightOffers, fetchHotelOffers } from '../utils/api';
import PropTypes from 'prop-types';

const DestinationDetails = ({ destination }) => {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const flightData = await fetchFlightOffers('LON', destination.code, '2024-10-01');
      const hotelData = await fetchHotelOffers(destination.code);
      setFlights(flightData);
      setHotels(hotelData);
    }
    fetchData();
  }, [destination]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{destination.cityName}</h2>
      <h3 className="text-xl mt-4">Flight Offers</h3>
      {flights.map((flight, index) => (
        <div key={index} className="p-2 border mt-2">
          <p>Price: ${flight.price}</p>
        </div>
      ))}

      <h3 className="text-xl mt-4">Hotel Accommodations</h3>
      {hotels.map((hotel, index) => (
        <div key={index} className="p-2 border mt-2">
          <p>{hotel.name}</p>
        </div>
      ))}
    </div>
  );
};

// Define propTypes for DestinationDetails component
DestinationDetails.propTypes = {
  destination: PropTypes.shape({
    cityName: PropTypes.string.isRequired,      // cityName is required
    country: PropTypes.string.isRequired,       // country is required
    imageUrl: PropTypes.string.isRequired,      // imageUrl is required
    attractions: PropTypes.arrayOf(             // attractions should be an array of strings
      PropTypes.string.isRequired
    ).isRequired,
    code: PropTypes.string.isRequired,          // code is required and should be a string
  }).isRequired,  // destination object is required
};

export default DestinationDetails;
