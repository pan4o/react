
import React from 'react';
import BoilingVerdict from './verdict';

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

		return (
			<fieldset>
				<legend>Enter temperature in Celsius:</legend>
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