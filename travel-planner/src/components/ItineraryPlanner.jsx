import PropTypes from 'prop-types';
const ItineraryPlanner = ({ itinerary }) => {
  return (
    <div className="p-4 border">
      <h2 className="text-2xl font-bold">Your Itinerary</h2>
      {itinerary.length ? (
        itinerary.map((item, index) => (
          <div key={index} className="my-2">
            <p>{item.cityName} - {item.date}</p>
          </div>
        ))
      ) : (
        <p>No items added yet.</p>
      )}
    </div>
  );
};

// Define propTypes for the ItineraryPlanner component
ItineraryPlanner.propTypes = {
  itinerary: PropTypes.arrayOf(
    PropTypes.shape({
      destination: PropTypes.string.isRequired, // 'destination' is required in each itinerary item
      startDate: PropTypes.string.isRequired,   // 'startDate' is required in each itinerary item
      endDate: PropTypes.string.isRequired,     // 'endDate' is required in each itinerary item
    })
  ).isRequired,  // 'itinerary' must be an array of objects and is required
};

export default ItineraryPlanner;
