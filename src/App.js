import React from 'react';

import './components/css/app.css';

import {WEATHER_KEY} from './Keys';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

class App extends React.Component {

	state = {
		temperature: '',
		description: '',
		humidity: '',
		wind_speed: '',
		city: '',
		country: '',
		timezone: '',
		icon: '',
		time: '',
		error: null
	}

	getWeather = async e => {
		e.preventDefault();
		const {city, country} = e.target.elements;
		const cityValue = city.value;
		const countryValue = country.value;
		if(cityValue && countryValue){
			const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&lang=sp&appid=${WEATHER_KEY}&units=metric`;
			const response = await fetch(API_URL);
			const data = await response.json();

			this.setState({
				temperature: data.main.temp,
				description: data.weather[0].description,
				humidity: data.main.humidity,
				wind_speed: data.wind.speed,
				city: data.name,
				country: data.sys.country,
				timezone: data.timezone,
				icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				time: data.weather[0].icon,
				error: null
			})
		}else{
			this.setState({error: 'Establesca una ciudad o un pais'})
		}
	}
	render() { 
		return (
			<React.Fragment>
				<Container>
					<Row>
						<Col md={6} className="mx-auto mb-5 mt-5">
							<h1 className="text-center text-white mb-4">Consulta el Clima</h1>
							<WeatherForm getWeather={this.getWeather}/>
							<WeatherInfo  {...this.state} />
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}
 
export default App;