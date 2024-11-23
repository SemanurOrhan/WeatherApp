import PropTypes from "prop-types";
import windIcon from "../icons/weatherIcons/wind-svgrepo-com.svg";
import humidityIcon from "../icons/weatherIcons/droplet-svgrepo-com.svg";
import "../styles/WeatherFooter.css";

const WeatherFooter = ({ wind, humidity }) => {
  return (
    <div className="weather-card-footer">
      <div className="col">
        <div className="weather-info">
          <img src={windIcon} className="weather-info-icon" />
          <span>{wind}</span>
          <p>Wind</p>
        </div>
        <div className="weather-info">
          <img src={humidityIcon} className="weather-info-icon" />
          <span>{humidity}</span>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
};

WeatherFooter.propTypes = {
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default WeatherFooter;
