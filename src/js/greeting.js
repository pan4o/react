
import React from 'react';

class Greeting extends React.Component {

	constructor (props) {

		super(props);

		this.isLoggedIn = this.props.isLoggedIn;

	}

	render () {

		var hello;

		if (this.isLoggedIn) {

			hello = <p>Hello User</p>

		} else {

			hello = <p>Hello Guest</p>

		}

		return (hello);

	}

}

export default Greeting;