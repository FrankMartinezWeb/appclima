import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WeatherForm = props => {
	return (
		<Form onSubmit={props.getWeather} className="mb-5">
			<Form.Group className="mb-3">
				<Row>
					<Col md={6}>
						<Form.Control type="text" name="city" placeholder="Ingrese la Ciudad" autoFocus/>
					</Col>
					<Col md={6}>
						<Form.Control type="text" name="country" placeholder="Ingrese el Pais"/>
					</Col>
				</Row>
			</Form.Group>
			<Button type="submit" className="d-block w-100 text-center" variant="primary">
				Consultar Clima
			</Button>
		</Form>
	)
}

export default WeatherForm;