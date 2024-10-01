import { useState } from 'react';
import PropTypes from 'prop-types'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) onSearch(query);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Search destinations..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="mt-2 p-2 bg-blue-500 text-white" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,  
};

export default SearchBar;
