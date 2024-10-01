import PropTypes from 'prop-types';
const DestinationCard = ({ destination, onClick }) => {
  return (
    <div className="border p-4" onClick={() => onClick(destination)}>
      <h2 className="text-lg font-bold">{destination.cityName}, {destination.country}</h2>
      <img src={destination.imageUrl} alt={destination.cityName} className="w-full h-48 object-cover" />
    </div>
  );
};

// Define propTypes for the DestinationCard component
DestinationCard.propTypes = {
  destination: PropTypes.shape({
    cityName: PropTypes.string.isRequired,   // cityName must be a string and is required
    country: PropTypes.string.isRequired,    // country must be a string and is required
    imageUrl: PropTypes.string.isRequired,   // imageUrl must be a string and is required
  }).isRequired,  // destination object is required
  onClick: PropTypes.func.isRequired,         // onClick must be a function and is required
};

export default DestinationCard;
