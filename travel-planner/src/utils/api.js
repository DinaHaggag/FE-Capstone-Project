import axios from 'axios';

// Initialize Axios instance with base URL and headers for Amadeus API
const amadeusApi = axios.create({
  baseURL: 'https://test.api.amadeus.com',
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_AMADEUS_API_KEY}`, // Add your API key from .env.local
  },
});

// Fetch destination data based on user search query (e.g., city or country name)
export const searchDestinations = async (keyword) => {
  try {
    const response = await amadeusApi.get(`/v1/reference-data/locations?keyword=${keyword}&subType=CITY`);
    return response.data;  // Returns data containing destinations
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

// Fetch flight offers between two cities (origin, destination) and a departure date
export const fetchFlightOffers = async (origin, destination, date) => {
  try {
    const response = await amadeusApi.get(`/v2/shopping/flight-offers`, {
      params: {
        originLocationCode: origin,   // Origin location code (e.g., LON for London)
        destinationLocationCode: destination,  // Destination location code (e.g., PAR for Paris)
        departureDate: date,          // Departure date (e.g., 2024-10-01)
        adults: 1,                    // Number of passengers (for now, 1 adult)
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flight offers:', error);
    throw error;
  }
};

// Fetch hotel accommodations in a given city (based on city code)
export const fetchHotelOffers = async (cityCode) => {
  try {
    const response = await amadeusApi.get(`/v2/shopping/hotel-offers?cityCode=${cityCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotel offers:', error);
    throw error;
  }
};
