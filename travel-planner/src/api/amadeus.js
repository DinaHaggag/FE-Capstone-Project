import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;
const BASE_URL = 'https://test.api.amadeus.com/v1';

const getAuthToken = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/security/oauth2/token`, null, {
      params: {
        grant_type: 'client_credentials',
        client_id: API_KEY,
        client_secret: apiSecret, 
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw error;
  }
};

export const fetchDestinations = async (keyword) => {
  const token = await getAuthToken();
  try {
    const response = await axios.get(`${BASE_URL}/reference-data/locations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword,
        subType: 'CITY',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const fetchFlightOffers = async (origin, destination, departureDate, adults = 1) => {
  const token = await getAuthToken();
  try {
    const response = await axios.get(`${BASE_URL}/v2/shopping/flight-offers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate,
        adults,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching flight offers:", error);
    throw error;
  }
};

export const fetchHotelOffers = async (cityCode) => {
  const token = await getAuthToken();
  try {
    const response = await axios.get(`${BASE_URL}/v2/shopping/hotel-offers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        cityCode,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching hotel offers:", error);
    throw error;
  }
};

export const fetchCityInformation = async (keyword) => {
  const token = await getAuthToken();
  try {
    const response = await axios.get(`${BASE_URL}/reference-data/locations/cities`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching city information:", error);
    throw error;
  }
};