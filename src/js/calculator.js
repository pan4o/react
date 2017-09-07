
import React from 'react';
import BoilingVerdict from './verdict';

var scaleNames = {
	c: 'Celsius',
	f: 'Fahrenhei'
};

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert (temperature, convert) {
	const input = parseFloat(temperature);

	if(Number.isNaN(input)) {
		return '';
	}

	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;

	return rounded.toString();
}

class Calculator extends React.Component {

	constructor (props) {

		super(props);

		this.state = {temperature: ''};

		this.handleChange = this.handleChange.bind(this);

	}

	handleChange (e) {

		this.setState({
			temperature: e.target.value
		});

	}

	render () {

		var temperature = this.state.temperature;
		var scale = this.props.scale;

		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input
					type="text"
					onChange={this.handleChange}
					value={temperature}
				/>
				<BoilingVerdict celsius={temperature} />
			</fieldset>
		);
		
	}

}

export default Calculator;