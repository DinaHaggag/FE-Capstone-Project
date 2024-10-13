import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env': { // Define process.env
      REACT_APP_AMADEUS_API_KEY: JSON.stringify(process.env.REACT_APP_AMADEUS_API_KEY),
      REACT_APP_AMADEUS_API_SECRET: JSON.stringify(process.env.REACT_APP_AMADEUS_API_SECRET),
    },
  },
  plugins: [react()],
});