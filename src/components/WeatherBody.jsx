import PropTypes from "prop-types";
import sun from "../icons/weatherIcons/sun-svgrepo-com.svg";
import "../styles/WeatherBody.css";

const WeatherBody = ({icon, temp, text}) => {
  return (
    <div className="weather-card-body">
          <img src={icon} alt={sun} className="weather-icon" />
          <h1>{temp}</h1>
          <span>{text}</span>
        </div>
  )
};

WeatherBody.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default WeatherBody