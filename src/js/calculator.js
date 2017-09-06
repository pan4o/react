
import React from 'react';
import BoilingVerdict from './verdict';

var scaleNames = {
	c: 'Celsius',
	f: 'Fahrenhei'
};

class Calculator extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			temperature: ''
		};

		this.handleChange = this.handleChange.bind(this);

	}

	handleChange (event) {

		var target = event.target;

		this.setState({
			temperature: target.value
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