

import React from 'react';

class HelloWorld extends React.Component {

	constructor(props) {

		super(props)

		this.me = {
			firstName: 'Serhii',
			lastName: 'Panchenko'
		};

	}

	formatUser(user) {
		return user.firstName + " " + user.lastName;
	}

	render() {
		return (
			<h1 style={{background: this.props.background}}>
				Hello World and Hello {this.formatUser(this.me)}!
			</h1>
		);
	}

}

export default HelloWorld;