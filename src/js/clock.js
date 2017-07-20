
import React from 'react';

class Clock extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			date: new Date()
		}

	}

	componentDidMount () {

		console.log('didMount');

		this.timerID = setInterval(
			() => this.tick(),
			1000
		);

	}

	componentWillUnmount () {

		console.log('willUnmount');

		clearInterval(this.timerID);

	}

	tick () {

		this.setState({
			date: new Date()
		});

	}

	render () {

		return (
			<div>
				<h2>{this.state.date.toLocaleTimeString()}</h2>
			</div>
		);

	}

}

export default Clock;

//https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly