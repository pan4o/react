
import React from 'react';

class Toggle extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			isToggleOn: true
		}

		this.handleClick = this.handleClick.bind(this);
		this.testThis = this.testThis.bind(this);
	}

	handleClick () {

		this.setState(prevState => ({

			isToggleOn: !prevState.isToggleOn

		}));

	}

	testThis () {

		console.log('this is: ' + this);

	}

	render () {

		return (
			<div>
				<p onClick={this.testThis}>test this</p>
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);

	}

}

export default Toggle;