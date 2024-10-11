import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
        placeholder="Search for a destination..."
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;