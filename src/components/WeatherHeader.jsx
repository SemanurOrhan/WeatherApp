import PropTypes from "prop-types";
import "../styles/WeatherHeader.css";

const WeatherHeader = ({city, day, time}) => {
  
  const days=["Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ];
  const dayName = days[day];
  return (
    <div className="weather-card-header">
      <h3 className="location">{city}</h3>
      <div className="today">
        <p className="day">{dayName}</p>
        <span className="clock">{time}</span>
      </div>
    </div>
  );
};

WeatherHeader.propTypes = {
  city: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired
};

export default WeatherHeader;
