import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainCity } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-regular-svg-icons';
// import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

import Image from 'react-bootstrap/Image';

import info from './css/weatherInfo.module.css';

const WeatherInfo = (props) => {
	return (
		<React.Fragment>
			{
				props.error &&
				<div className="alert alert-danger">
					{props.error}
				</div>
			}
			{
				props.temperature ?
				<div className="d-flex flex-column align-items-center">
					<FontAwesomeIcon icon={faMountainCity} className={`${info["weather-montain"]} text-white mb-4`} />
					<h3 className="fs-4 text-white">{props.city}, {props.country}</h3>
					<h3 className="fs-4 text-white">{props.description} ({props.time.substr(-1) === 'd' ? 'dia': 'noche'})</h3>
					<h2 className={`${info["weather-temperature"]} text-white`}>{props.temperature}ºC</h2>
					<p className="fs-4 text-white m-0">Humedad: {props.humidity}</p>
					<p className="fs-4 text-white m-0">Velocidad de viento: {props.wind_speed}</p>
					<Image src={props.icon} fluid></Image>
				</div>
				:
				<p></p>
			}
		</React.Fragment>
	)
}

export default WeatherInfo;