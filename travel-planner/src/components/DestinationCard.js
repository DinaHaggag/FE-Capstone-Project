import React from 'react';

const DestinationCard = ({ destination, onSelect }) => {
  return (
    <div className="border rounded p-4 m-2 cursor-pointer" onClick={() => onSelect(destination)}>
      <img src={destination.imageUrl} alt={destination.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold">{destination.name}</h2>
      <p>{destination.country}</p>
    </div>
  );
};

export default DestinationCard;