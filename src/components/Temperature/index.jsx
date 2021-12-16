import PropTypes from 'prop-types';
import {formatDate} from '../../utils/dateUtils.js'

function Temperature({
    city,
    country,
    temperature,
    weather
}) {

    return(
        <div>
            <div className="location-box">
                <div className="location">{city} / {country}</div>
                <div className="date">{formatDate(new Date())}</div>
            </div>

            <div className="weather-box">
                <div className="temp">
                    {Math.round(temperature)}°c
                </div>
                <div className="weather">{weather}</div>
            </div>
        </div>
    )

}

Temperature.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired
}

export default Temperature;